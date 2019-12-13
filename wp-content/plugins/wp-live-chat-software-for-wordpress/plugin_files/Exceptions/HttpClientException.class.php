<?php
/**
 * Class HttpClientException
 *
 * @package LiveChat\Exceptions
 */

namespace LiveChat\Exceptions;

use Exception;

/**
 * Class HttpClientException
 */
class HttpClientException extends Exception {
	/**
	 * HttpClientException constructor.
	 *
	 * @param string    $message  Error message.
	 * @param int       $code     Error code.
	 * @param Exception $previous Exception which caused current error.
	 */
	public function __construct(
		$message = '', $code = 0, Exception $previous = null
	) {
		parent::__construct( "Server error: $message", $code, $previous );
	}
}
