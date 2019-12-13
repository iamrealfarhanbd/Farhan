<?php
/**
 * Class LiveChat
 *
 * @package LiveChat
 */

namespace LiveChat;

use Exception;
use LiveChat\Helpers\TrackingCodeHelper;
use LiveChat\Services\ApiClient;
use LiveChat\Services\CertProvider;
use LiveChat\Services\ConnectToken;
use LiveChat\Services\ConnectTokenProvider;
use LiveChat\Services\ModuleConfiguration;
use LiveChat\Services\Store;
use LiveChat\Services\UrlProvider;

/**
 * Class LiveChat
 */
class LiveChat {
	/**
	 * Singleton pattern
	 *
	 * @var LiveChat $instance
	 */
	protected static $instance;

	/**
	 * Instance of ModuleConfiguration class
	 *
	 * @var ModuleConfiguration|null
	 */
	protected $module = null;

	/**
	 * LiveChat account login
	 *
	 * @var string|null $login
	 */
	protected $login = null;

	/**
	 * Starts the plugin
	 */
	public function __construct() {
		$this->module = ModuleConfiguration::get_instance();

		if ( $this->has_license_number() ) {
			add_action( 'wp_head', array( $this, 'tracking_code' ) );
		} else {
			add_action( 'wp_enqueue_scripts', array( $this, 'widget_script' ) );
		}
	}

	/**
	 * Singleton pattern
	 *
	 * @return LiveChat
	 */
	public static function get_instance() {
		if ( ! isset( static::$instance ) ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	/**
	 * Adds chat widget to WP site.
	 * It is used only for migrated users who are not connected to new integration.
	 */
	public function tracking_code() {
		echo ( new TrackingCodeHelper() )->render();
	}

	/**
	 * Returns true if LiveChat store token is set (not empty string),
	 * false otherwise
	 *
	 * @return bool
	 */
	public function is_installed() {
		return ! empty( Store::get_instance()->get_store_token() );
	}

	/**
	 * Returns true number if option exists and is valid,
	 * false otherwise
	 *
	 * @return bool
	 */
	public function has_license_number() {
		$license_number = max( 0, get_option( 'livechat_license_number' ) );
		return $license_number > 0;
	}

	/**
	 * Returns LiveChat license number
	 *
	 * @return int
	 */
	public function get_license_number() {
		if ( $this->has_license_number() ) {
			return get_option( 'livechat_license_number' );
		}

		try {
			$store_token   = Store::get_instance()->get_store_token();
			$connect_token = ConnectTokenProvider::create( CertProvider::create() )->get( $store_token, 'store' );
			$response      = ApiClient::create( $connect_token )->store_info();
			return $response['store']['license'];
		} catch ( Exception $exception ) {
			return 0;
		}
	}

	/**
	 * Returns LiveChat login
	 */
	public function get_login() {
		if ( is_null( $this->login ) ) {
			$this->login = sanitize_email( get_option( 'livechat_email' ) );
		}

		return $this->login;
	}

	/**
	 * Returns LiveChat settings
	 *
	 * @return int
	 */
	public function get_settings() {
		$settings['disableMobile'] = get_option( 'livechat_disable_mobile' );
		$settings['disableGuests'] = get_option( 'livechat_disable_guests' );

		return $settings;
	}

	/**
	 * Injects widget script code
	 */
	public function widget_script() {
		try {
			$token   = ConnectToken::load(
				Store::get_instance()->get_store_token(),
				CertProvider::create()->get_stored_cert()
			);
			$api_url = UrlProvider::create( $token )->get_api_url();

			$widget_url = sprintf(
				$api_url . '/api/v1/script/%s/widget.js',
				$token->get_store_uuid()
			);

			wp_register_script(
				'livechat-widget',
				$widget_url,
				array(),
				$this->module->get_plugin_version(),
				$in_footer = true
			);
			wp_enqueue_script( 'livechat-widget' );
		} catch ( Exception $exception ) {
			echo wp_kses(
				( new TrackingCodeHelper() )->render(),
				array(
					'script'   => array(
						'type' => array(),
					),
					'noscript' => array(),
					'a'        => array(
						'href'   => array(),
						'rel'    => array(),
						'target' => array(),
					),
				)
			);
		}
	}

	/**
	 * Checks if visitor is on mobile device.
	 *
	 * @return boolean
	 */
	public function check_mobile() {
		$user_agent = array_key_exists( 'HTTP_USER_AGENT', $_SERVER ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_USER_AGENT'] ) ) : '';
		$regex      = '/((Chrome).*(Mobile))|((Android).*)|((iPhone|iPod).*Apple.*Mobile)|((Android).*(Mobile))/i';
		return preg_match( $regex, $user_agent );
	}
}
