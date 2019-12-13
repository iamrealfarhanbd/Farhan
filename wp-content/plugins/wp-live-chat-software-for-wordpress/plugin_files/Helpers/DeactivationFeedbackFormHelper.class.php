<?php
/**
 * Class DeactivationFeedbackFormHelper
 *
 * @package LiveChat\Helpers
 */

namespace LiveChat\Helpers;

use LiveChat\LiveChat;
use LiveChat\Services\User;

/**
 * Class DeactivationFeedbackFormHelper
 */
class DeactivationFeedbackFormHelper extends LiveChatHelper {
	/**
	 * Renders modal with deactivation feedback form.
	 */
	public function render() {
		$wp_user    = User::get_instance()->get_user_data();
		$license_id = LiveChat::get_instance()->get_license_number();

		?>
		<div class="lc-design-system-typography lc-modal-base__overlay" id="lc-deactivation-feedback-modal-overlay" style="display: none">
			<div class="lc-modal-base"  id="lc-deactivation-feedback-modal-container">
				<button title="<?php esc_html_e( 'Cancel', 'wp-live-chat-software-for-wordpress' ); ?>" class="lc-modal-base__close">
					<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							fill="#424D57"
							class="material material-close-icon undefined"
					>
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
					</svg>
				</button>
				<div class="lc-modal__header">
					<div class="lc-modal__heading" id="lc-deactivation-feedback-modal-heading">
						<img
								id="lc-deactivation-feedback-logo"
								alt="LiveChat logo"
								src="<?php echo esc_html( plugins_url( 'wp-live-chat-software-for-wordpress' ) . '/plugin_files/images/livechat-logo.svg' ); ?>"
						/>
						<h2 id="lc-deactivation-feedback-modal-title">
							<?php esc_html_e( 'Quick Feedback', 'wp-live-chat-software-for-wordpress' ); ?>
						</h2>
					</div>
				</div>
				<div class="lc-modal__body">
					<form
							action="#"
							method="post"
							id="lc-deactivation-feedback-form"
					>
						<div role="group" class="lc-form-group">
							<div class="lc-form-group__header">
								<div class="lc-form-group__label">
									<?php esc_html_e( 'If you have a moment, please let us know why you are deactivating LiveChat:', 'wp-live-chat-software-for-wordpress' ); ?>
								</div>
							</div>
							<div class="lc-field-group">
								<div class="lc-radio">
									<label class="lc-radio__label">
										<div class="lc-radio__circle">
											<span class="lc-radio__inner-circle"></span>
											<input
													type="radio"
													class="lc-radio__input"
													value="I no longer need the plugin."
													name="lc-deactivation-feedback-option"
											/>
										</div>
										<div class="lc-radio__text">
											<?php esc_html_e( 'I no longer need the plugin.', 'wp-live-chat-software-for-wordpress' ); ?>
										</div>
									</label>
								</div>
								<div class="lc-radio">
									<label class="lc-radio__label">
										<div class="lc-radio__circle">
											<span class="lc-radio__inner-circle"></span>
											<input
													type="radio"
													class="lc-radio__input"
													value="I couldn't get the plugin to work."
													name="lc-deactivation-feedback-option"
											/>
										</div>
										<div class="lc-radio__text">
											<?php esc_html_e( "I couldn't get the plugin to work.", 'wp-live-chat-software-for-wordpress' ); ?>
										</div>
									</label>
								</div>
								<div class="lc-radio">
									<label class="lc-radio__label">
										<div class="lc-radio__circle">
											<span class="lc-radio__inner-circle"></span>
											<input
													type="radio"
													class="lc-radio__input"
													value="I found a better plugin."
													name="lc-deactivation-feedback-option"
											/>
										</div>
										<div class="lc-radio__text">
											<?php esc_html_e( 'I found a better plugin.', 'wp-live-chat-software-for-wordpress' ); ?>
										</div>
									</label>
								</div>
								<div class="lc-radio">
									<label class="lc-radio__label">
										<div class="lc-radio__circle">
											<span class="lc-radio__inner-circle"></span>
											<input
													type="radio"
													class="lc-radio__input"
													value="It's a temporary deactivation."
													name="lc-deactivation-feedback-option"
											/>
										</div>
										<div class="lc-radio__text">
											<?php esc_html_e( "It's a temporary deactivation.", 'wp-live-chat-software-for-wordpress' ); ?>
										</div>
									</label>
								</div>
								<div class="lc-radio">
									<label class="lc-radio__label">
										<div class="lc-radio__circle">
											<span class="lc-radio__inner-circle"></span>
											<input
													type="radio"
													class="lc-radio__input"
													value="Other"
													name="lc-deactivation-feedback-option"
													id="lc-deactivation-feedback-option-other"
											/>
										</div>
										<div class="lc-radio__text">
											<?php esc_html_e( 'Other', 'wp-live-chat-software-for-wordpress' ); ?>
										</div>
									</label>
								</div>
								<div class="lc-text-field" id="lc-deactivation-feedback-other-field">
									<div>
									<textarea
											class="lc-textarea"
											placeholder="<?php esc_html_e( 'Tell us more...', 'wp-live-chat-software-for-wordpress' ); ?>"
									></textarea>
									</div>
								</div>
								<span class="lc-field-error" id="lc-deactivation-feedback-form-option-error">
									<?php esc_html_e( 'Please choose one of available options.', 'wp-live-chat-software-for-wordpress' ); ?>
								</span>
								<span class="lc-field-error" id="lc-deactivation-feedback-form-other-error">
									<?php esc_html_e( 'Please provide additional feedback.', 'wp-live-chat-software-for-wordpress' ); ?>
								</span>
							</div>
						</div>
					</form>
					<script>
						window.deactivationDetails = window.deactivationDetails || {};
						window.deactivationDetails = {
							license: <?php echo esc_html( $license_id ); ?>,
							name: '<?php echo esc_html( $wp_user['name'] ); ?>',
							wpEmail: '<?php echo esc_html( $wp_user['email'] ); ?>'
						};
					</script>
				</div>
				<div class="lc-modal__footer">
					<button class="lc-btn" id="lc-deactivation-feedback-modal-skip-btn">
						<?php esc_html_e( 'Skip & continue', 'wp-live-chat-software-for-wordpress' ); ?>
					</button>
					<button class="lc-btn lc-btn--primary" id="lc-deactivation-feedback-modal-submit-btn">
						<?php esc_html_e( 'Send feedback', 'wp-live-chat-software-for-wordpress' ); ?>
					</button>
				</div>
			</div>
		</div>
		<?php
	}
}
