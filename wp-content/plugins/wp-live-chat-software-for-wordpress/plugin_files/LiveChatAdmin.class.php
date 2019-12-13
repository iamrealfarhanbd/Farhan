<?php

namespace LiveChat;

use Exception;
use LiveChat\Helpers\ConfirmIdentityNoticeHelper;
use LiveChat\Helpers\ConnectNoticeHelper;
use LiveChat\Helpers\ConnectServiceHelper;
use LiveChat\Helpers\DeactivationFeedbackFormHelper;
use LiveChat\Helpers\ReviewNoticeHelper;
use LiveChat\Helpers\ResourcesTabHelper;
use LiveChat\Services\ApiClient;
use LiveChat\Services\CertProvider;
use LiveChat\Services\ConnectTokenProvider;
use LiveChat\Services\Store;
use LiveChat\Services\TokenValidator;
use LiveChat\Services\User;
use WP_Error;

/**
 * Class LiveChatAdmin
 *
 * @package LiveChat
 */
final class LiveChatAdmin extends LiveChat {
	/**
	 * Returns true if "Advanced settings" form has just been submitted,
	 * false otherwise
	 *
	 * @var bool
	 */
	private $changes_saved = false;

	/**
	 * Timestamp from which review notice timeout count starts from
	 *
	 * @var int
	 */
	private $review_notice_start_timestamp = null;

	/**
	 * Timestamp offset
	 *
	 * @var int
	 */
	private $review_notice_start_timestamp_offset = null;

	/**
	 * Returns true if review notice was dismissed
	 *
	 * @var bool
	 */
	private $review_notice_dismissed = false;

	/**
	 * Starts the plugin
	 *
	 * @throws Exception Can be thrown by check_notices_conditions method.
	 */
	public function __construct() {
		parent::__construct();

		add_action( 'admin_init', array( $this, 'load_translations' ) );
		add_action( 'admin_init', array( $this, 'load_menu_icon_styles' ) );
		add_action( 'admin_init', array( $this, 'load_general_scripts_and_styles' ) );
		add_action( 'admin_init', array( $this, 'inject_nonce_object' ) );

		add_action( 'wp_ajax_lc_connect', array( $this, 'ajax_connect' ) );

		// Notice action.
		$this->check_notices_conditions();

		add_action( 'admin_menu', array( $this, 'admin_menu' ) );

		add_action( 'admin_init', array( $this, 'handle_post' ) );

		if ( array_key_exists( 'SCRIPT_NAME', $_SERVER ) && strpos( sanitize_text_field( wp_unslash( $_SERVER['SCRIPT_NAME'] ) ), 'plugins.php' ) ) {
			add_action( 'in_admin_header', array( $this, 'show_deactivation_feedback_form' ) );
		}
	}

	/**
	 * Handles post.
	 */
	public function handle_post() {
		if ( current_user_can( 'manage_options' )
			&& array_key_exists( 'nonce', $_GET )
			&& wp_verify_nonce( sanitize_text_field( wp_unslash( $_GET['nonce'] ) ), 'livechat-security-check' )
		) {
			if ( array_key_exists( 'reset', $_GET ) && '1' === $_GET['reset'] && array_key_exists( 'page', $_GET ) && 'livechat_settings' === $_GET['page'] ) {
				$this->reset_options();
			} elseif ( array_key_exists( 'REQUEST_METHOD', $_SERVER ) && 'POST' === $_SERVER['REQUEST_METHOD'] ) {
				// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
				// Data is sanitized inside update_options method.
				echo $this->update_options( $_POST );
				// phpcs:enable
			}
		}
	}

	/**
	 * Returns instance of LiveChat class (singleton pattern).
	 *
	 * @return LiveChat
	 * @throws Exception Can be thrown by constructor.
	 */
	public static function get_instance() {
		if ( ! isset( static::$instance ) ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	/**
	 * Make translation ready
	 */
	public function load_translations() {
		load_plugin_textdomain(
			'wp-live-chat-software-for-wordpress',
			false,
			'wp-live-chat-software-for-wordpress/languages'
		);
	}

	/**
	 * Fix CSS for icon in menu
	 */
	public function load_menu_icon_styles() {
		wp_enqueue_style( 'livechat-menu', $this->module->get_plugin_url() . 'css/livechat-menu.css', false, $this->module->get_plugin_version() );
	}

	/**
	 * Returns timestamp of review notice first occurrence.
	 *
	 * @return int
	 */
	private function get_review_notice_start_timestamp() {
		if ( is_null( $this->review_notice_start_timestamp ) ) {
			$timestamp = get_option( 'livechat_review_notice_start_timestamp' );
			// If timestamp was not set on install.
			if ( ! $timestamp ) {
				$timestamp = time();
				update_option( 'livechat_review_notice_start_timestamp', $timestamp ); // Set timestamp if not set on install.
			}

			$this->review_notice_start_timestamp = $timestamp;
		}

		return $this->review_notice_start_timestamp;
	}

	/**
	 * Returns timestamp offset of review notice occurrence.
	 *
	 * @return int
	 */
	private function get_review_notice_start_timestamp_offset() {
		if ( is_null( $this->review_notice_start_timestamp_offset ) ) {
			$offset = get_option( 'livechat_review_notice_start_timestamp_offset' );
			// If offset was not set on install.
			if ( ! $offset ) {
				$offset = 16;
				update_option( 'livechat_review_notice_start_timestamp_offset', $offset ); // Set shorter offset.
			}

			$this->review_notice_start_timestamp_offset = $offset;
		}

		return $this->review_notice_start_timestamp_offset;
	}

	/**
	 * Checks if review was dismissed.
	 *
	 * @return bool
	 */
	private function check_if_review_notice_was_dismissed() {
		if ( ! $this->review_notice_dismissed ) {
			$this->review_notice_dismissed = get_option( 'livechat_review_notice_dismissed' );
		}

		return $this->review_notice_dismissed;
	}

	/**
	 * Loads CSS.
	 */
	private function load_design_system_styles() {
		// phpcs:disable WordPress.WP.EnqueuedResourceParameters.MissingVersion
		// Files below don't need to be versioned.
		wp_register_style( 'livechat-source-sans-pro-font', 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600' );
		wp_register_style( 'livechat-material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons' );
		wp_register_style( 'livechat-design-system', 'https://cdn.livechat-static.com/design-system/styles.css' );
		wp_enqueue_style( 'livechat-source-sans-pro-font', false, $this->module->get_plugin_version() );
		wp_enqueue_style( 'livechat-material-icons', false, $this->module->get_plugin_version() );
		wp_enqueue_style( 'livechat-design-system', false, $this->module->get_plugin_version() );
		// phpcs:enable
	}

	/**
	 * Loads JS scripts and CSS.
	 */
	public function load_general_scripts_and_styles() {
		$this->load_design_system_styles();
		wp_enqueue_script( 'livechat', $this->module->get_plugin_url() . 'js/livechat.js', 'jquery', $this->module->get_plugin_version(), true );
		wp_enqueue_style( 'livechat', $this->module->get_plugin_url() . 'css/livechat-general.css', false, $this->module->get_plugin_version() );
		wp_enqueue_script( 'bridge', $this->module->get_plugin_url() . 'js/connect.js', 'jquery', $this->module->get_plugin_version(), false );
	}

	/**
	 * Adds nonce value to AJAX object in JS script.
	 */
	public function inject_nonce_object() {
		$nonce = array(
			'value' => wp_create_nonce( 'wp_ajax_lc_connect' ),
		);

		wp_localize_script( 'bridge', 'ajax_nonce', $nonce );
	}

	/**
	 * Loads scripts and CSS for review modal.
	 */
	public function load_review_scripts_and_styles() {
		wp_enqueue_script( 'livechat-review', $this->module->get_plugin_url() . 'js/livechat-review.js', 'jquery', $this->module->get_plugin_version(), true );
		wp_enqueue_style( 'livechat-review', $this->module->get_plugin_url() . 'css/livechat-review.css', false, $this->module->get_plugin_version() );
	}

	/**
	 * Adds LiveChat to WP administrator menu.
	 */
	public function admin_menu() {
		add_menu_page(
			'LiveChat',
			// phpcs:disable WordPress.Security.NonceVerification.Recommended
			// This is not a form's processing.
			$this->is_installed() || ( array_key_exists( 'page', $_GET ) && 'livechat_settings' === $_GET['page'] ) ? 'LiveChat' : 'LiveChat <span class="awaiting-mod">!</span>',
			// phpcs:enable
			'administrator',
			'livechat',
			array( $this, 'livechat_settings_page' ),
			$this->module->get_plugin_url() . 'images/livechat-icon.svg'
		);

		add_submenu_page(
			'livechat',
			__( 'Settings', 'wp-live-chat-software-for-wordpress' ),
			__( 'Settings', 'wp-live-chat-software-for-wordpress' ),
			'administrator',
			'livechat_settings',
			array( $this, 'livechat_settings_page' )
		);

		add_submenu_page(
			'livechat',
			__( 'Resources', 'wp-live-chat-software-for-wordpress' ),
			__( 'Resources', 'wp-live-chat-software-for-wordpress' ),
			'administrator',
			'livechat_resources',
			array( $this, 'livechat_resources_page' )
		);

		// Remove the submenu that is automatically added.
		if ( function_exists( 'remove_submenu_page' ) ) {
			remove_submenu_page( 'livechat', 'livechat' );
		}

		// Settings link.
		add_filter( 'plugin_action_links', array( $this, 'livechat_settings_link' ), 10, 2 );
	}

	/**
	 * Displays settings page
	 */
	public function livechat_settings_page() {
		ConnectServiceHelper::create()->render();
	}

	/**
	 * Displays resources page
	 */
	public function livechat_resources_page() {
		ResourcesTabHelper::create()->render();
	}

	/**
	 * Returns flag changes_saved.
	 *
	 * @return bool
	 */
	public function changes_saved() {
		return $this->changes_saved;
	}

	/**
	 * Returns link to LiveChat setting page.
	 *
	 * @param array  $links Array with links.
	 * @param string $file File name.
	 *
	 * @return mixed
	 */
	public function livechat_settings_link( $links, $file ) {
		if ( basename( $file ) !== 'livechat.php' ) {
			return $links;
		}

		$settings_link = sprintf( '<a href="admin.php?page=livechat_settings">%s</a>', __( 'Settings' ) );
		array_unshift( $links, $settings_link );
		return $links;
	}

	/**
	 * Deletes options set by LiveChat plugin.
	 */
	private function reset_options() {
		delete_option( 'livechat_license_number' );
		delete_option( 'livechat_email' );
		delete_option( 'livechat_review_notice_start_timestamp' );
		delete_option( 'livechat_review_notice_start_timestamp_offset' );
		delete_option( 'livechat_disable_mobile' );
		delete_option( 'livechat_disable_guests' );
	}

	/**
	 * Checks if review notice should be visible.
	 *
	 * @return bool
	 * @throws Exception Can be thrown by check_if_license_is_active.
	 */
	private function check_review_notice_conditions() {
		if ( $this->is_installed() && ! $this->check_if_review_notice_was_dismissed() && $this->check_if_license_is_active() ) {
			$seconds_in_day   = 60 * 60 * 24;
			$notice_timeout   = time() - $this->get_review_notice_start_timestamp();
			$timestamp_offset = $this->get_review_notice_start_timestamp_offset();
			if ( $notice_timeout >= $seconds_in_day * $timestamp_offset ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Checks if any notice should be displayed.
	 *
	 * @throws Exception Can be throw by is_installed method.
	 */
	private function check_notices_conditions() {
		if ( $this->check_review_notice_conditions() ) {
			add_action( 'admin_init', array( $this, 'load_review_scripts_and_styles' ) );
			add_action( 'wp_ajax_lc_review_dismiss', array( $this, 'ajax_review_dismiss' ) );
			add_action( 'wp_ajax_lc_review_postpone', array( $this, 'ajax_review_postpone' ) );
			add_action( 'admin_notices', array( $this, 'show_review_notice' ) );
		}
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		// This is not a form's processing.
		if ( ! $this->is_installed() && ! ( array_key_exists( 'page', $_GET ) && 'livechat_settings' === $_GET['page'] ) ) {
			// phpcs:enable
			if ( $this->has_license_number() ) {
				add_action( 'admin_notices', array( $this, 'show_confirm_identity_notice' ) );
			} else {
				add_action( 'admin_notices', array( $this, 'show_connect_notice' ) );
			}
		}
	}

	/**
	 * Checks if LiveChat license is active.
	 *
	 * @return mixed
	 * @throws Exceptions\ApiClientException Can be thrown by ApiClient.
	 * @throws Exceptions\InvalidTokenException Can be throw by ConnectTokenProvider.
	 */
	private function check_if_license_is_active() {
		$store         = Store::get_instance();
		$connect_token = ConnectTokenProvider::create( CertProvider::create() )->get( $store->get_store_token(), 'store' );
		return ApiClient::create( $connect_token )->license_info()['isActive'];
	}

	/**
	 * Shows review notice.
	 */
	public function show_review_notice() {
		( new ReviewNoticeHelper() )->render();
	}

	/**
	 * Shows connect notice.
	 */
	public function show_connect_notice() {
		( new ConnectNoticeHelper() )->render();
	}

	/**
	 * Shows confirm identity notice.
	 */
	public function show_confirm_identity_notice() {
		( new ConfirmIdentityNoticeHelper() )->render();
	}

	/**
	 * Shows deactivation feedback form.
	 */
	public function show_deactivation_feedback_form() {
		( new DeactivationFeedbackFormHelper() )->render();
	}

	/**
	 * Marks review as dismissed in WP options.
	 */
	public function ajax_review_dismiss() {
		update_option( 'livechat_review_notice_dismissed', true );
		echo 'OK';
		wp_die();
	}

	/**
	 * Marks review as postponed in WP options.
	 */
	public function ajax_review_postpone() {
		update_option( 'livechat_review_notice_start_timestamp', time() );
		update_option( 'livechat_review_notice_start_timestamp_offset', 7 );
		echo 'OK';
		wp_die();
	}

	/**
	 * Connects WP plugin with LiveChat account.
	 * Validates tokens and, if they are valid, stores them in WP database.
	 */
	public function ajax_connect() {
		$user_token  = null;
		$store_token = null;

		check_ajax_referer( 'wp_ajax_lc_connect', 'security' );

		if ( array_key_exists( 'user_token', $_POST ) && array_key_exists( 'store_token', $_POST ) && array_key_exists( 'security', $_POST ) ) {
			$user_token  = sanitize_text_field( wp_unslash( $_POST['user_token'] ) );
			$store_token = sanitize_text_field( wp_unslash( $_POST['store_token'] ) );
		}

		try {
			TokenValidator::create( CertProvider::create() )->validate_tokens( $user_token, $store_token );
			User::get_instance()->authorize_current_user( $user_token );
			Store::get_instance()->authorize_store( $store_token );
			delete_option( 'livechat_license_number' );
			delete_option( 'livechat_email' );

			wp_send_json_success( array( 'status' => 'ok' ) );
		} catch ( Exception $e ) {
			wp_send_json_error(
				new WP_Error( $e->getCode(), $e->getMessage() )
			);
		}
	}

	/**
	 * Removes all LiveChat data stored in WP database.
	 * It's called as uninstall hook.
	 *
	 * @throws Exceptions\ApiClientException Can be thrown by ApiClient.
	 * @throws Exceptions\InvalidTokenException Can be thrown by ConnectTokenProvider.
	 */
	public static function uninstall_hook_handler() {
		$store = Store::get_instance();

		if ( ! empty( $store->get_store_token() ) ) {
			$connect_token = ConnectTokenProvider::create( CertProvider::create() )->get( $store->get_store_token(), 'store' );
			ApiClient::create( $connect_token )->uninstall();
			$store->remove_store_data();
		}

		User::get_instance()->remove_authorized_users();
		CertProvider::create()->remove_stored_cert();

		delete_option( 'livechat_review_notice_start_timestamp' );
		delete_option( 'livechat_review_notice_start_timestamp_offset' );
		delete_option( 'livechat_disable_mobile' );
		delete_option( 'livechat_disable_guests' );
	}

	/**
	 * Updates options
	 *
	 * @param array $data Options to set.
	 *
	 * @return bool
	 */
	private function update_options( $data ) {
		if ( ! isset( $data['licenseEmail'] ) || ! isset( $data['licenseNumber'] ) ) {
			if ( array_key_exists( 'disableMobile', $data ) || array_key_exists( 'disableGuests', $data ) ) {
				$disable_mobile = array_key_exists( 'disableMobile', $data ) ? (int) $data['disableMobile'] : 0;
				$disable_guests = array_key_exists( 'disableGuests', $data ) ? (int) $data['disableGuests'] : 0;

				update_option( 'livechat_disable_mobile', $disable_mobile );
				update_option( 'livechat_disable_guests', $disable_guests );

				$array = array(
					'message' => 'success',
				);

				wp_send_json( $array );
			} else {
				return false;
			}
		} else {

			$license_number = isset( $data['licenseNumber'] ) ? (int) $data['licenseNumber'] : 0;
			$email          = isset( $data['licenseEmail'] ) ? (string) $data['licenseEmail'] : '';

			update_option( 'livechat_license_number', $license_number );
			update_option( 'livechat_email', sanitize_email( $email ) );

			update_option( 'livechat_review_notice_start_timestamp', time() );
			update_option( 'livechat_review_notice_start_timestamp_offset', 16 );

			update_option( 'livechat_disable_mobile', 0 );
			update_option( 'livechat_disable_guests', 0 );

			if ( isset( $data['changes_saved'] ) && '1' === $data['changes_saved'] ) {
				$this->changes_saved = true;
			}
		}
	}
}
