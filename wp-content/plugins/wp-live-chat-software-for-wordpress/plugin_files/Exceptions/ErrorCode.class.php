<?php
/**
 * Class ErrorCodes
 *
 * @package LiveChat\Exceptions
 */

namespace LiveChat\Exceptions;

/**
 * Class ErrorCodes
 */
class ErrorCodes {

	/**
	 * Authorization token is missing
	 *
	 * @var int $missing_auth_token
	 */
	public static $missing_auth_token = 100;

	/**
	 * Public key (cert) is missing
	 *
	 * @var int $missing_public_key
	 */
	public static $missing_public_key = 101;

	/**
	 * HTTP client error
	 *
	 * @var int $http_client_error
	 */
	public static $http_client_error = 103;

	/**
	 * Given store token is invalid
	 *
	 * @var int $invalid_store_token
	 */
	public static $invalid_store_token = 104;

	/**
	 * Given user token is invalid
	 *
	 * @var int $invalid_user_token
	 */
	public static $invalid_user_token = 105;
}
