<?php
/**
 * Class ReviewNoticeHelper
 *
 * @package LiveChat\Helpers
 */

namespace LiveChat\Helpers;

/**
 * Class ReviewNoticeHelper
 */
class ReviewNoticeHelper extends LiveChatHelper {
	/**
	 * Renders review notice.
	 */
	public function render() {
		?>
		<div class="lc-design-system-typography lc-notice notice notice-info is-dismissible" id="lc-review-notice">
			<div class="lc-notice-column">
				<img class="lc-notice-logo" src="<?php echo esc_html( plugins_url( 'wp-live-chat-software-for-wordpress' ) . '/plugin_files/images/livechat-logo.svg' ); ?>" alt="LiveChat logo" />
			</div>
			<div class="lc-notice-column">
				<p><?php echo wp_kses( __( 'Hey, you’ve been using <strong>LiveChat</strong> for more than 14 days - that’s awesome! Could you please do us a BIG favour and <strong>give LiveChat a 5-star rating on WordPress</strong>? Just to help us spread the word and boost our motivation.', 'wp-live-chat-software-for-wordpress' ), array( 'strong' => array() ) ); ?></p>
				<p><?php echo wp_kses( __( '<strong>&ndash; The LiveChat Team</strong>' ), array( 'strong' => array() ) ); ?></p>
				<div id="lc-review-notice-actions">
					<a href="https://wordpress.org/support/plugin/wp-live-chat-software-for-wordpress/reviews/#new-post" target="_blank" class="lc-review-notice-action lc-btn lc-btn--compact lc-btn--primary" id="lc-review-now">
						<i class="material-icons">thumb_up</i> <span><?php esc_html_e( 'Ok, you deserve it', 'wp-live-chat-software-for-wordpress' ); ?></span>
					</a>
					<a href="#" class="lc-review-notice-action lc-btn lc-btn--compact" id="lc-review-postpone">
						<i class="material-icons">schedule</i> <span><?php esc_html_e( 'Maybe later', 'wp-live-chat-software-for-wordpress' ); ?></span>
					</a>
					<a href="#" class="lc-review-notice-action lc-btn lc-btn--compact" id="lc-review-dismiss">
						<i class="material-icons">not_interested</i> <span><?php esc_html_e( 'No, thanks', 'wp-live-chat-software-for-wordpress' ); ?></span>
					</a>
				</div>
			</div>
		</div>
		<?php
	}
}
