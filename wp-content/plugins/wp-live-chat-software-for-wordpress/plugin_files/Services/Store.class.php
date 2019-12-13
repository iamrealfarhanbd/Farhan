<?php
/**
 * Class Store
 *
 * @package LiveChat\Services
 */

namespace LiveChat\Services;

/**
 * Class Store
 *
 * @package LiveChat\Services
 */
class Store {
	/**
	 * Instance of Store class (singleton pattern)
	 *
	 * @var Store
	 */
	private static $instance = null;

	/**
	 * Saves store token in WP database
	 *
	 * @param string $store_token JWT store token.
	 *
	 * @return bool
	 */
	public function authorize_store( $store_token ) {
		return update_option( 'livechat_store_token', $store_token );
	}

	/**
	 * Removes store token from WP database
	 *
	 * @return bool
	 */
	public function remove_store_data() {
		return delete_option( 'livechat_store_token' );
	}

	/**
	 * Returns store token if is saved in WP database
	 *
	 * @return string
	 */
	public function get_store_token() {
		$store_token = get_option( 'livechat_store_token' );
		if ( ! $store_token ) {
			return '';
		}

		return $store_token;
	}

	/**
	 * Returns new instance of User class
	 *
	 * @return Store
	 */
	public static function get_instance() {
		if ( ! isset( static::$instance ) ) {
			static::$instance = new static();
		}

		return static::$instance;
	}
}
