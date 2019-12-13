<?php
/**
 * Class ResourcesTabHelper
 *
 * @package LiveChat\Helpers
 */

namespace LiveChat\Helpers;

use LiveChat\Services\TemplateParser;

/**
 * Class ResourcesTabHelper
 */
class ResourcesTabHelper extends LiveChatHelper {
	/**
	 * Renders iframe with Resources page.
	 */
	public function render() {
		$context                 = array();
		$context['resourcesUrl'] = esc_html( 'https://connect.livechatinc.com/wordpress/resources' );
		TemplateParser::create( '../templates' )->parse_template( 'resources.html.twig', $context );
	}

	/**
	 * Returns new instance of ResourcesTabHelper.
	 *
	 * @return static
	 */
	public static function create() {
		return new static();
	}
}
