<?php
/*
Plugin Name: LiveChat
Plugin URI: https://www.livechatinc.com/addons/wordpress/
Description: Live chat software for live help, online sales and customer support. This plugin allows to quickly install LiveChat on any WordPress website.
Author: LiveChat
Author URI: https://www.livechatinc.com
Version: 4.1.0
Text Domain: wp-live-chat-software-for-wordpress
Domain Path: /languages
*/

require_once dirname( __FILE__ ) . '/vendor/autoload.php';

/**
 * Uninstall hook handler.
 *
 * @throws \LiveChat\Exceptions\ApiClientException Can be thrown by uninstall_hook_header method.
 * @throws \LiveChat\Exceptions\InvalidTokenException Can Can be thrown by uninstall_hook_header method.
 */
function uninstall_hook_handler() {
	\LiveChat\LiveChatAdmin::uninstall_hook_handler();
}

if ( is_admin() ) {
	require_once dirname( __FILE__ ) . '/plugin_files/LiveChatAdmin.class.php';
	\LiveChat\LiveChatAdmin::get_instance();

	register_uninstall_hook( __FILE__, 'uninstall_hook_handler' );
} else {
	require_once dirname( __FILE__ ) . '/plugin_files/LiveChat.class.php';
	\LiveChat\LiveChat::get_instance();
}

