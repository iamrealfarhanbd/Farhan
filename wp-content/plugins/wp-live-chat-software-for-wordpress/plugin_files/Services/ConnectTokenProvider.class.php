<?php

namespace LiveChat\Services;

use LiveChat\Exceptions\ApiClientException;
use LiveChat\Exceptions\InvalidTokenException;

/**
 * Class ConnectTokenProvider
 *
 * @package LiveChat\Services
 */
class ConnectTokenProvider {
	/**
	 * Instance of CertProvider
	 *
	 * @var CertProvider
	 */
	private $cert_provider = null;

	/**
	 * Instance of TokenValidator
	 *
	 * @var TokenValidator
	 */
	private $token_validator = null;

	/**
	 * ConnectTokenProvider constructor.
	 *
	 * @param CertProvider   $cert_provider Instance of CertProvider.
	 * @param TokenValidator $token_validator Instance of TokenValidator.
	 */
	public function __construct( $cert_provider, $token_validator ) {
		$this->cert_provider   = $cert_provider;
		$this->token_validator = $token_validator;
	}

	/**
	 * Returns ConnectToken if user token is valid
	 *
	 * @param string $token      JWT token.
	 * @param string $token_type Type of JWT token (could be store or user).
	 *
	 * @return ConnectToken
	 * @throws ApiClientException Can be thrown by get_stored_cert method.
	 * @throws InvalidTokenException Can be thrown by get_stored_cert method.
	 */
	public function get( $token, $token_type = 'user' ) {
		if ( 'store' === $token_type ) {
			$this->token_validator->validate_store_token( $token );
		} else {
			$this->token_validator->validate_user_token( $token );
		}

		return ConnectToken::load(
			$token,
			$this->cert_provider->get_stored_cert()
		);
	}

	/**
	 * Returns new instance of ConnectTokenProvider
	 *
	 * @param CertProvider $cert_provider Instance of CertProvider.
	 *
	 * @return static
	 */
	public static function create( $cert_provider ) {
		return new static(
			$cert_provider,
			TokenValidator::create( $cert_provider )
		);
	}
}
