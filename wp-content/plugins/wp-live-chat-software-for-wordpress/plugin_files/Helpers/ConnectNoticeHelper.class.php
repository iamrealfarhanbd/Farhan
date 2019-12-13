<?php
/**
 * Class ConnectNoticeHelper
 *
 * @package LiveChat\Helpers
 */

namespace LiveChat\Helpers;

/**
 * Class ConnectNoticeHelper
 */
class ConnectNoticeHelper extends LiveChatHelper {
	/**
	 * Renders ConnectNotice in WP dashboard.
	 */
	public function render() {
		?>
		<div class="lc-design-system-typography notice notice-info lc-notice" id="lc-connect-notice">
			<div class="lc-notice-column">
				<img class="lc-notice-logo" src="<?php echo esc_html( plugins_url( 'wp-live-chat-software-for-wordpress' ) . '/plugin_files/images/livechat-logo.svg' ); ?>" alt="LiveChat logo" />
			</div>
			<div class="lc-notice-column">
				<p id="lc-connect-notice-header">
		<?php esc_html_e( 'Action required - connect LiveChat', 'wp-live-chat-software-for-wordpress' ); ?>
				</p>
				<p>
		<?php esc_html_e( 'Please' ); ?>
					<a href="admin.php?page=livechat_settings"><?php esc_html_e( 'connect your LiveChat account' ); ?></a>
		<?php esc_html_e( 'to start chatting with your customers.', 'wp-live-chat-software-for-wordpress' ); ?>
				</p>
			</div>
			<div class="lc-notice-column" id="lc-connect-notice-button-column">
				<p>
					<button class="lc-btn lc-btn--primary" id="lc-connect-notice-button" type="button">
		<?php esc_html_e( 'Connect', 'wp-live-chat-software-for-wordpress' ); ?>
					</button>
				</p>
			</div>
		</div>
		<?php
	}
}
