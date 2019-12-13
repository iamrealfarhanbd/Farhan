<?php
/**
 * Class ConnectServiceHelper
 *
 * @package LiveChat\Helpers
 */

namespace LiveChat\Helpers;

use Exception;
use LiveChat\Services\CertProvider;
use LiveChat\Services\ConnectTokenProvider;
use LiveChat\Services\ModuleConfiguration;
use LiveChat\Services\Store;
use LiveChat\Services\UrlProvider;
use LiveChat\Services\User;
use LiveChat\Services\TemplateParser;

/**
 * Class ConnectServiceHelper
 */
class ConnectServiceHelper extends LiveChatHelper {
	/**
	 * ModuleConfiguration instance
	 *
	 * @var ModuleConfiguration|null
	 */
	private $module = null;

	/**
	 * Current user instance
	 *
	 * @var User|null
	 */
	private $user = null;

	/**
	 * Current store instance.
	 *
	 * @var Store|null
	 */
	private $store = null;

	/**
	 * ConnectServiceHelper constructor.
	 *
	 * @param ModuleConfiguration $module ModuleConfiguration class instance.
	 * @param User                $user User class instance.
	 * @param Store               $store Store class instance.
	 */
	public function __construct( $module, $user, $store ) {
		$this->module = $module;
		$this->user   = $user;
		$this->store  = $store;
	}

	/**
	 * Returns app url with region from store token.
	 *
	 * @return string
	 */
	private function get_app_url() {
		try {
			$decoded_token = ConnectTokenProvider::create( CertProvider::create() )->get( $this->store->get_store_token(), 'store' );
			return UrlProvider::create( $decoded_token )->get_app_url();
		} catch ( Exception $exception ) {
			return UrlProvider::create()->get_app_url();
		}
	}

	/**
	 * Renders iframe with Connect service.
	 */
	public function render() {
		$context               = array();
		$context['appUrl']     = esc_html( $this->get_app_url() );
		$context['siteUrl']    = esc_html( $this->module->get_site_url() );
		$context['userEmail']  = esc_html( $this->user->get_user_data()['email'] );
		$context['wpVer']      = esc_html( $this->module->get_wp_version() );
		$context['moduleVer']  = esc_html( $this->module->get_plugin_version() );
		$context['lcToken']    = esc_html( $this->user->get_current_user_token() );
		$context['storeToken'] = esc_html( $this->store->get_store_token() );

		TemplateParser::create( '../templates' )->parse_template( 'connect.html.twig', $context );
	}

	/**
	 * Returns new instance of ConnectServiceHelper.
	 *
	 * @return static
	 */
	public static function create() {
		return new static(
			ModuleConfiguration::get_instance(),
			User::get_instance(),
			Store::get_instance()
		);
	}
}
