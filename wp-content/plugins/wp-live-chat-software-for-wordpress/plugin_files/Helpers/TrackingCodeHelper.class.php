<?php
/**
 * Class TrackingCodeHelper
 *
 * @package LiveChat\Helpers
 */

namespace LiveChat\Helpers;

use LiveChat\LiveChat;
use LiveChat\Services\User;

/**
 * Class TrackingCodeHelper
 */
class TrackingCodeHelper extends LiveChatHelper {
	/**
	 * Returns tracking code.
	 *
	 * @return string
	 */
	public function render() {
		$tracking = '';
		$livechat = LiveChat::get_instance();

		if ( $livechat->has_license_number() || $livechat->is_installed() ) {
			$license_number = LiveChat::get_instance()->get_license_number();
			$settings       = LiveChat::get_instance()->get_settings();
			$check_mobile   = LiveChat::get_instance()->check_mobile();
			$check_logged   = User::get_instance()->check_logged();
			$visitor        = User::get_instance()->get_user_data();

			if ( ! $settings['disableMobile'] || ( $settings['disableMobile'] && ! $check_mobile ) ) {
				if ( ! $settings['disableGuests'] || ( $settings['disableGuests'] && $check_logged ) ) {
					$tracking = <<<TRACKING_CODE_START
<script type="text/javascript">
	window.__lc = window.__lc || {};
	window.__lc.license = {$license_number};

TRACKING_CODE_START;

					$tracking .= <<<VISITOR_DATA
	window.__lc.visitor = {
		name: '{$visitor['name']}',
		email: '{$visitor['email']}'
	};

VISITOR_DATA;

					$tracking .= <<<TRACKING_CODE_END
	(function() {
		var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
		lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
	})();
</script>

TRACKING_CODE_END;

					$tracking .= <<<NOSCRIPT
<noscript>
<a href="https://www.livechatinc.com/chat-with/{$license_number}/">Chat with us</a>,
powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener" target="_blank">LiveChat</a>
</noscript>
NOSCRIPT;

				}
			}
		}

		return $tracking;
	}
}
