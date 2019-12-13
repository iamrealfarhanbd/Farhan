<?php
/**
 * Class ConfirmIdentityNoticeHelper
 *
 * @package LiveChat\Helpers
 */

namespace LiveChat\Helpers;

use LiveChat\Services\TemplateParser;

/**
 * Class ConfirmIdentityNoticeHelper
 */
class ConfirmIdentityNoticeHelper extends LiveChatHelper {

	/**
	 * Renders helper.
	 */
	public function render() {
		$context                    = array();
		$context['lcNoticeLogoUrl'] = esc_html( plugins_url( 'wp-live-chat-software-for-wordpress' ) . '/plugin_files/images/livechat-logo.svg' );
		$context['header']          = esc_html__( 'Action required - confirm your identity', 'wp-live-chat-software-for-wordpress' );
		$context['notice']          = esc_html__(
			'Thank you for updating LiveChat to the latest version. Please click Connect to confirm your identity and finish the installation.',
			'wp-live-chat-software-for-wordpress'
		);
		$context['button']          = esc_html__( 'Connect', 'wp-live-chat-software-for-wordpress' );

		TemplateParser::create( '../templates' )->parse_template( 'confirm_identity_notice.html.twig', $context );
	}
}
