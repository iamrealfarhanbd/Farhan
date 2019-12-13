<?php
/**
 * Class User
 *
 * @package LiveChat\Services
 */

namespace LiveChat\Services;

/**
 * Class User
 */
class User {
	/**
	 * Instance of User class (singleton pattern)
	 *
	 * @var null
	 */
	private static $instance = null;

	/**
	 * Currently logged in user data
	 *
	 * @var null
	 */
	private $current_user = null;

	/**
	 * User constructor.
	 */
	public function __construct() {
		$this->current_user = wp_get_current_user();
	}

	/**
	 * Checks if visitor is logged in
	 *
	 * @return boolean
	 */
	public function check_logged() {
		if ( property_exists( $this->current_user->data, 'ID' ) ) {
			return true;
		}
		return false;
	}

	/**
	 * Get visitor's name and email
	 *
	 * @return array
	 */
	public function get_user_data() {
		$email = '';
		$name  = '';

		if ( ! empty( $this->current_user->user_email ) ) {
			$email = $this->current_user->user_email;
		}

		if ( ! empty( $this->current_user->user_firstname ) && ! empty( $this->current_user->user_lastname ) ) {
			$name = $this->current_user->user_firstname . ' ' . $this->current_user->user_lastname;
		} else {
			$name = $this->current_user->user_login;
		}

		return array(
			'name'  => $name,
			'email' => $email,
		);
	}

	/**
	 * Return array of users authorized in LiveChat
	 *
	 * @return array|null
	 */
	private function get_authorized_users() {
		$authorized_users = get_option( 'livechat_authorized_users' );
		if ( ! $authorized_users ) {
			return null;
		}

		return array_values(
			array_filter( explode( ',', $authorized_users ) )
		);
	}

	/**
	 * Stores user token in WP database
	 *
	 * @param int    $user_id User's id.
	 * @param string $token User authorization token.
	 *
	 * @return bool
	 */
	private function set_user_token( $user_id, $token ) {
		return update_option( 'livechat_user_' . $user_id . '_token', $token );
	}

	/**
	 * Removes token for given user from WP database
	 *
	 * @param int $user_id User's id.
	 *
	 * @return bool
	 */
	private function remove_user_token( $user_id ) {
		return delete_option( 'livechat_user_' . $user_id . '_token' );
	}

	/**
	 * Removes all users tokens from WP database
	 */
	public function remove_authorized_users() {
		$authorized_users = $this->get_authorized_users();

		foreach ( $authorized_users as $user_id ) {
			$this->remove_user_token( $user_id );
		}

		delete_option( 'livechat_authorized_users' );
	}

	/**
	 * Stores user token in WP database and adds user to list of users
	 * authorized in LiveChat.
	 *
	 * @param string $user_token User authorization token.
	 *
	 * @return bool
	 */
	public function authorize_current_user( $user_token ) {
		$authorized_users   = $this->get_authorized_users();
		$user_id            = $this->current_user->ID;
		$authorized_users[] = $user_id;
		return update_option(
			'livechat_authorized_users',
			implode( ',', $authorized_users )
		) && $this->set_user_token( $user_id, $user_token );
	}

	/**
	 * Returns token of current user
	 *
	 * @return mixed|string|void
	 */
	public function get_current_user_token() {
		$user_id = $this->current_user->ID;

		$user_token = get_option( 'livechat_user_' . $user_id . '_token' );
		if ( ! $user_token ) {
			return '';
		}

		return $user_token;
	}

	/**
	 * Returns new instance of User class
	 *
	 * @return User
	 */
	public static function get_instance() {
		if ( ! isset( static::$instance ) ) {
			static::$instance = new static();
		}

		return static::$instance;
	}
}
