<?php
/**
 * Class ApiClientException
 *
 * @package LiveChat\Exceptions
 */

namespace LiveChat\Exceptions;

use Exception;

/**
 * Class ApiClientException
 */
class ApiClientException extends Exception {
	/**
	 * ApiClientException constructor.
	 *
	 * @param string    $message Error message.
	 * @param int       $code Error code.
	 * @param Exception $previous Exception which caused current error.
	 */
	public function __construct(
		$message = '', $code = 0, Exception $previous = null
	) {
		parent::__construct( "ApiClient Error: $message", $code, $previous );
	}
}
