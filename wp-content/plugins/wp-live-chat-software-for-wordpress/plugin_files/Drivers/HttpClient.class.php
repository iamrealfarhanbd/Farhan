<?php
/**
 * Class HttpClient
 *
 * @package LiveChat\Drivers
 */

namespace LiveChat\Drivers;

use LiveChat\Exceptions\HttpClientException;

/**
 * Class HttpClient
 */
class HttpClient {
	/**
	 * Makes HTTP request.
	 *
	 * @param string     $method  Defines request method.
	 * @param string     $url     Defines request url.
	 * @param array|null $options Defines request additional options, e.g. headers, body content.
	 *
	 * @return array HTTP response.
	 * @throws HttpClientException Can be thrown if wp_remote_request method fails.
	 */
	public function request( $method, $url, $options = array() ) {
		$options['method'] = $method;

		if ( 'POST' === $method || 'PUT' === $method ) {
			if (
				! array_key_exists( 'headers', $options ) ||
				! array_key_exists( 'Content-Type', $options['headers'] ) ||
				! array_key_exists( 'content-type', $options['headers'] )
			) {
				$options['headers']['Content-Type'] = 'application/json; charset=utf-8';
			}

			if ( ! array_key_exists( 'body', $options ) ) {
				$options['body'] = '{}';
			}
		}

		$response = wp_remote_request( $url, $options );

		if ( is_wp_error( $response ) ) {
			$code = is_numeric( $response->get_error_code() ) ? $response->get_error_code() : 0;

			throw new HttpClientException( $response->get_error_message(), $code );
		}

		if ( strpos( wp_remote_retrieve_header( $response, 'content-type' ), 'application/json' ) !== false ) {
			return json_decode( wp_remote_retrieve_body( $response ), true );
		}

		return wp_remote_retrieve_body( $response );
	}
}
