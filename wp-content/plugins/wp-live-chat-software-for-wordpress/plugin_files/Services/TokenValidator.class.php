<?php
/**
 * Class TokenValidator
 *
 * @package LiveChat\Services
 */

namespace LiveChat\Services;

use Exception;
use LiveChat\Exceptions\ApiClientException;
use LiveChat\Exceptions\InvalidTokenException;

/**
 * Class TokenValidator
 *
 * @package LiveChat\Services
 */
class TokenValidator {

	/**
	 * Public key
	 *
	 * @var string|null
	 */
	private $cert_provider = null;

	/**
	 * ConnectTokenProvider constructor.
	 *
	 * @param CertProvider $cert_provider Instance of CertProvider.
	 */
	public function __construct( $cert_provider ) {
		$this->cert_provider = $cert_provider;
	}

	/**
	 * Checks if given token is valid JWT token.
	 *
	 * @param string $token JWT token to validate.
	 *
	 * @return ConnectToken|null
	 */
	private function validate_jwt_token( $token ) {
		try {
			return ConnectToken::load(
				$token,
				$this->cert_provider->get_stored_cert()
			);
		} catch ( Exception $exception ) {
			return null;
		}
	}

	/**
	 * Validates signed store token
	 *
	 * @param string $store_token JWT store token.
	 *
	 * @throws InvalidTokenException Can be thrown if store_token is incorrect.
	 */
	public function validate_store_token( $store_token ) {
		$decoded_store_token = $this->validate_jwt_token( $store_token );

		if ( is_null( $decoded_store_token ) || ! $decoded_store_token->get_store_uuid() ) {
			throw InvalidTokenException::store();
		}
	}

	/**
	 * Verifies signed user token.
	 *
	 * @param string $user_token JWT user token.
	 *
	 * @throws InvalidTokenException Can be thrown if user_token is incorrect.
	 */
	public function validate_user_token( $user_token ) {
		$decoded_user_token = $this->validate_jwt_token( $user_token );

		if ( is_null( $decoded_user_token ) || ! $decoded_user_token->get_user_uuid() ) {
			throw InvalidTokenException::user();
		}
	}

	/**
	 * Validates user and store tokens
	 *
	 * @param string $user_token User JWT token.
	 * @param string $store_token Store JWT token.
	 *
	 * @return bool
	 * @throws InvalidTokenException|ApiClientException Can be thrown by validation methods.
	 */
	public function validate_tokens( $user_token, $store_token ) {
		$this->validate_user_token( $user_token );
		$this->validate_store_token( $store_token );

		return true;
	}

	/**
	 * Returns new instance of TokenValidator
	 *
	 * @param CertProvider $cert_provider CertProvider instance.
	 *
	 * @return TokenValidator
	 */
	public static function create( $cert_provider ) {
		return new static( $cert_provider );
	}
}
