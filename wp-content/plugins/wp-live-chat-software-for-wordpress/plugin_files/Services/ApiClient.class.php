<?php
/**
 * Class ApiClient
 *
 * @package LiveChat/Services
 */

namespace LiveChat\Services;

use LiveChat\Drivers\HttpClient;
use LiveChat\Exceptions\ApiClientException;
use LiveChat\Exceptions\ErrorCodes;
use LiveChat\Exceptions\HttpClientException;

/**
 * Class ApiClient
 *
 * @package LiveChat\Services
 */
class ApiClient {
	/**
	 * Instance of ApiClient (singleton pattern)
	 *
	 * @var ApiClient|null
	 */
	public static $instance = null;

	/**
	 * URL of API server
	 *
	 * @var string
	 */
	private $api_url;

	/**
	 * Authorization token
	 *
	 * @var ConnectToken
	 */
	private $connect_token = null;

	/**
	 * HTTP client
	 *
	 * @var HttpClient|null
	 */
	private $client = null;

	/**
	 * ApiClient constructor.
	 *
	 * @param HttpClient   $client HTTP client instance.
	 * @param string       $api_url API url string.
	 * @param ConnectToken $connect_token ConnectToken instance.
	 */
	public function __construct( $client, $api_url, $connect_token ) {
		$this->client        = $client;
		$this->api_url       = $api_url;
		$this->connect_token = $connect_token;
	}

	/**
	 * Returns default headers
	 *
	 * @return array
	 */
	private function headers() {
		return array(
			'Accept'        => 'application/json',
			'Platform'      => 'wordpress',
			'Authorization' => sprintf( 'Bearer %s', $this->connect_token->get_token() ),
		);
	}

	/**
	 * Returns full request url for given endpoint and API version
	 *
	 * @param string      $endpoint API endpoint.
	 * @param string|null $api_version API version.
	 *
	 * @return string
	 */
	private function get_request_url( $endpoint, $api_version = null ) {
		return sprintf(
			'%s/api/%s/%s',
			$this->api_url,
			$api_version ?: $this->connect_token->get_api_version(),
			$endpoint
		);
	}

	/**
	 * Gets RSA public key from backend
	 *
	 * @return bool|string
	 * @throws ApiClientException Can be thrown from make_request method.
	 */
	public function get_cert() {
		$options = array(
			'headers' => array(
				'Accept'   => 'application/x-pem-file',
				'Platform' => 'wordpress',
			),
		);

		return $this->make_request( 'GET', 'certs/jwt.pem', $options, 'v1', false );
	}


	/**
	 * Gets store info.
	 *
	 * @return array
	 * @throws ApiClientException Can be thrown from make_request method.
	 */
	public function store_info() {
		return $this->make_request( 'GET', 'store/info' );
	}

	/**
	 * Gets info about LiveChat license.
	 *
	 * @return array
	 * @throws ApiClientException Can be thrown from make_request method.
	 */
	public function license_info() {
		return $this->make_request( 'GET', 'license/info' );
	}

	/**
	 * Uninstalls site in Connect service
	 *
	 * @return array
	 * @throws ApiClientException Can be thrown from make_request method.
	 */
	public function uninstall() {
		return $this->make_request( 'POST', 'uninstall' );
	}

	/**
	 * Performs a request
	 *
	 * @param string      $method             HTTP method.
	 * @param string      $endpoint           API endpoint.
	 * @param array       $options            Request options.
	 * @param string|null $api_version        API version.
	 * @param bool        $with_authorization Check if user is authorized flag.
	 *
	 * @return array|string
	 * @throws ApiClientException Could be thrown when request failed and exception from HttpClient was catched.
	 */
	public function make_request( $method, $endpoint, $options = array(), $api_version = null, $with_authorization = true ) {
		if ( $with_authorization && ! $this->connect_token->has_token() ) {
			throw new ApiClientException( 'Missing auth token', ErrorCodes::$missing_auth_token );
		}

		if ( ! array_key_exists( 'headers', $options ) ) {
			$options['headers'] = $this->headers();
		}

		try {
			return $this->client->request(
				$method,
				$this->get_request_url( $endpoint, $api_version ),
				$options
			);
		} catch ( HttpClientException $exception ) {
			throw new ApiClientException( $exception->getMessage(), ErrorCodes::$http_client_error, $exception );
		}
	}

	/**
	 * Returns instance of ApiClient
	 *
	 * @param ConnectToken $connect_token ConnectToken instance.
	 *
	 * @return ApiClient
	 */
	public static function create( $connect_token = null ) {
		return new ApiClient(
			new HttpClient(),
			UrlProvider::create( $connect_token )->get_api_url(),
			is_null( $connect_token ) ? new ConnectToken() : $connect_token
		);
	}
}
