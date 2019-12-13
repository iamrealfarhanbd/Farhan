<?php
/**
 * Class CertProvider
 *
 * @package LiveChat\Services
 */

namespace LiveChat\Services;

use LiveChat\Exceptions\ApiClientException;

/**
 * Class CertProvider
 *
 * @package LiveChat\Services
 */
class CertProvider {

	/**
	 * Public RSA key
	 *
	 * @var string|null
	 */
	private $cert = null;

	/**
	 * Instance of ApiClient class
	 *
	 * @var ApiClient|null
	 */
	private $api_client = null;

	/**
	 * CertProvider constructor.
	 *
	 * @param ApiClient   $api_client ApiClient instance.
	 * @param string|null $cert RSA public key.
	 */
	public function __construct( $api_client, $cert = null ) {
		$this->cert       = $cert;
		$this->api_client = $api_client;
	}

	/**
	 * Returns RSA public key
	 *
	 * @return string
	 * @throws ApiClientException Can be thrown from get_cert method.
	 */
	public function get_stored_cert() {
		if ( is_null( $this->cert ) ) {
			$cert = get_option( 'livechat_public_key' );
			if ( ! $cert ) {
				$cert = $this->api_client->get_cert();
				update_option( 'livechat_public_key', $cert );
			}

			$this->cert = $cert;
		}

		return $this->cert;
	}

	/**
	 * Removes public RSA key from WP database
	 *
	 * @return bool
	 */
	public function remove_stored_cert() {
		return delete_option( 'livechat_public_key' );
	}

	/**
	 * Returns new instance of CertProvider
	 *
	 * @param string|null $cert RSA public key used to verify token.
	 *
	 * @return CertProvider
	 */
	public static function create( $cert = null ) {
		return new CertProvider( ApiClient::create(), $cert );
	}
}
