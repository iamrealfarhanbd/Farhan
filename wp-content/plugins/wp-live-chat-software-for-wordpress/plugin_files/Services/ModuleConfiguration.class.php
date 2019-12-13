<?php
/**
 * Class ModuleConfiguration
 *
 * @package LiveChat\Services
 */

namespace LiveChat\Services;

/**
 * Class ModuleConfiguration
 *
 * @package LiveChat\Services
 */
final class ModuleConfiguration {
	/**
	 * Instance of ModuleConfiguration (singleton pattern)
	 *
	 * @var null
	 */
	private static $instance = null;

	/**
	 * WordPress site's url
	 *
	 * @var string
	 */
	private $site_url;

	/**
	 * Plugin's url
	 *
	 * @var string
	 */
	private $plugin_url;

	/**
	 * WordPress version
	 *
	 * @var string
	 */
	private $wp_version;

	/**
	 * Plugins version
	 *
	 * @var string
	 */
	private $plugin_version;

	/**
	 * RSA public key for tokens validation
	 *
	 * @var string
	 */
	private $cert;

	/**
	 * ModuleConfiguration constructor.
	 */
	public function __construct() {
		global $wp_version;

		$this->wp_version = $wp_version;
	}

	/**
	 * Returns WordPress version
	 *
	 * @return string
	 */
	public function get_wp_version() {
		return $this->wp_version;
	}

	/**
	 * Returns plugin files absolute path
	 *
	 * @return string
	 */
	public function get_plugin_url() {
		if ( is_null( $this->plugin_url ) ) {
			$this->plugin_url = plugin_dir_url( __DIR__ . '..' );
		}

		return $this->plugin_url;
	}

	/**
	 * Returns site's url
	 *
	 * @return string
	 */
	public function get_site_url() {
		if ( is_null( $this->site_url ) ) {
			$this->site_url = get_site_url();
		}

		return $this->site_url;
	}

	/**
	 * Returns this plugin's version
	 *
	 * @return string
	 */
	public function get_plugin_version() {
		if ( is_null( $this->plugin_version ) ) {
			$this->plugin_version = get_file_data( __DIR__ . '/../../livechat.php', array( 'Version' ) )[0];
		}

		return $this->plugin_version;
	}

	/**
	 * Returns frontend url with specified API region.
	 *
	 * @param string $region API region.
	 *
	 * @return string
	 */
	public function get_app_url( $region = 'us' ) {
		return sprintf(
			'https://connect.livechatinc.com/%s/wordpress',
			$region
		);
	}

	/**
	 * Returns new instance of ModuleConfiguration class
	 *
	 * @return ModuleConfiguration
	 */
	public static function get_instance() {
		if ( ! isset( static::$instance ) ) {
			static::$instance = new static();
		}

		return static::$instance;
	}
}
