<?php
/**
 * Class InvalidTokenException
 *
 * @package LiveChat\Exceptions
 */

namespace LiveChat\Exceptions;

use Exception;

/**
 * Class InvalidTokenException
 */
class InvalidTokenException extends Exception {
	/**
	 * InvalidTokenException constructor.
	 *
	 * @param string $code Given invalid code.
	 *
	 * @inheritDoc
	 */
	public function __construct( $code ) {
		parent::__construct( 'Invalid token', $code );
	}

	/**
	 * Creates InvalidTokenException for invalid store token
	 *
	 * @return InvalidTokenException
	 */
	public static function store() {
		return new InvalidTokenException( ErrorCodes::$invalid_store_token );
	}

	/**
	 * Creates InvalidTokenException for invalid user token
	 *
	 * @return InvalidTokenException
	 */
	public static function user() {
		return new InvalidTokenException( ErrorCodes::$invalid_user_token );
	}
}
