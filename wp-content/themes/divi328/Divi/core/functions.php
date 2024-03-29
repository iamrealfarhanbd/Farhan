<?php

if ( ! function_exists( 'et_allow_ampersand' ) ) :
/**
 * Convert &amp; into &
 * Escaped ampersand by wp_kses() which is used by et_get_safe_localization()
 * can be a troublesome in some cases, ie.: when string is sent in an email.
 *
 * @param string $string original string
 *
 * @return string modified string
 */
function et_allow_ampersand( $string ) {
	return str_replace('&amp;', '&', $string);
}
endif;


if ( ! function_exists( 'et_core_autoloader' ) ):
/**
 * Callback for {@link spl_autoload_register()}.
 *
 * @param $class_name
 */
function et_core_autoloader( $class_name ) {
	if ( 0 !== strpos( $class_name, 'ET_Core' ) ) {
		return;
	}

	static $components    = null;
	static $groups_loaded = array();

	if ( null === $components ) {
		$components = et_core_get_components_metadata();
	}

	if ( ! isset( $components[ $class_name ] ) ) {
		return;
	}

	$file   = ET_CORE_PATH . $components[ $class_name ]['file'];
	$groups = $components[ $class_name ]['groups'];
	$slug   = $components[ $class_name ]['slug'];

	if ( ! file_exists( $file ) ) {
		return;
	}

	// Load component class
	require_once $file;

	/**
	 * Fires when a Core Component is loaded.
	 *
	 * The dynamic portion of the hook name, $slug, refers to the slug of the Core Component that was loaded.
	 *
	 * @since 1.0.0
	 */
	do_action( "et_core_component_{$slug}_loaded" );

	if ( empty( $groups ) ) {
		return;
	}

	foreach( $groups as $group_name ) {
		if ( in_array( $group_name, $groups_loaded ) ) {
			continue;
		}

		$groups_loaded[] = $group_name;
		$slug            = $components['groups'][ $group_name ]['slug'];
		$init_file       = $components['groups'][ $group_name ]['init'];
		$init_file       = empty( $init_file ) ? null : ET_CORE_PATH . $init_file;

		et_core_initialize_component_group( $slug, $init_file );
	}
}
endif;

if ( ! function_exists( 'et_core_clear_transients' ) ):
function et_core_clear_transients() {
	delete_transient( 'et_core_path' );
	delete_transient( 'et_core_version' );
	delete_transient( 'et_core_needs_old_theme_patch' );
}
add_action( 'upgrader_process_complete', 'et_core_clear_transients', 10, 0 );
add_action( 'switch_theme', 'et_core_clear_transients' );
add_action( 'update_option_active_plugins', 'et_core_clear_transients', 10, 0 );
add_action( 'update_site_option_active_plugins', 'et_core_clear_transients', 10, 0 );
endif;


if ( ! function_exists( 'et_core_cron_schedules_cb' ) ):
function et_core_cron_schedules_cb( $schedules ) {
	if ( isset( $schedules['monthly'] ) ) {
		return $schedules;
	}

	$schedules['monthly'] = array(
		'interval' => MONTH_IN_SECONDS,
		'display'  => __( 'Once Monthly' )
	);

	return $schedules;
}
add_action( 'cron_schedules', 'et_core_cron_schedules_cb' );
endif;


if ( ! function_exists( 'et_core_die' ) ):
function et_core_die( $message = '' ) {
	if ( wp_doing_ajax() ) {
		$message = '' !== $message ? $message : esc_html__( 'Configuration Error', 'et_core' );
		wp_send_json_error( array( 'error' => $message ) );
	}

	wp_die();
}
endif;


if ( ! function_exists( 'et_core_get_components_metadata' ) ):
function et_core_get_components_metadata() {
	static $metadata = null;

	if ( null === $metadata ) {
		require_once '_metadata.php';
		$metadata = json_decode( $metadata, true );
	}

	return $metadata;
}
endif;


if ( ! function_exists( 'et_core_get_component_names' ) ):
/**
 * Returns the names of all available components, optionally filtered by type and/or group.
 *
 * @param string $include The type of components to include (official|third-party|all). Default is 'official'.
 * @param string $group   Only include components in $group. Optional.
 *
 * @return array
 */
function et_core_get_component_names( $include = 'official', $group = '' ) {
	static $official_components = null;

	if ( null === $official_components ) {
		$official_components = et_core_get_components_metadata();
	}

	if ( 'official' === $include ) {
		return empty( $group ) ? $official_components['names'] : $official_components['groups'][ $group ]['members'];
	}

	$third_party_components = et_core_get_third_party_components();

	if ( 'third-party' === $include ) {
		return array_keys( $third_party_components );
	}

	return array_merge(
		array_keys( $third_party_components ),
		empty( $group ) ? $official_components['names'] : $official_components['groups'][ $group ]['members']
	);
}
endif;


if ( ! function_exists( 'et_core_get_ip_address' ) ):
/**
 * Returns the IP address of the client that initiated the current HTTP request.
 *
 * @return string
 */
function et_core_get_ip_address() {
	if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
		$ip = $_SERVER['HTTP_CLIENT_IP'];
	} else if ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
		$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
	} else {
		$ip = $_SERVER['REMOTE_ADDR'];
	}

	return sanitize_text_field( $ip );
}
endif;

if ( ! function_exists( 'et_core_use_google_fonts' ) ) :
function et_core_use_google_fonts() {
	$utils              = ET_Core_Data_Utils::instance();
	$google_api_options = get_option( 'et_google_api_settings' );

	return 'on' === $utils->array_get( $google_api_options, 'use_google_fonts', 'on' );
}
endif;

if ( ! function_exists( 'et_core_get_main_fonts' ) ) :
function et_core_get_main_fonts() {
	global $wp_version;

	if ( version_compare( $wp_version, '4.6', '<' ) || ( ! is_admin() && ! et_core_use_google_fonts() ) ) {
		return '';
	}

	$fonts_url = '';

	/* Translators: If there are characters in your language that are not
	 * supported by Open Sans, translate this to 'off'. Do not translate
	 * into your own language.
	 */
	$open_sans = _x( 'on', 'Open Sans font: on or off', 'Divi' );

	if ( 'off' !== $open_sans ) {
		$font_families = array();

		if ( 'off' !== $open_sans )
			$font_families[] = 'Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800';

		$protocol = is_ssl() ? 'https' : 'http';
		$query_args = array(
			'family' => implode( '%7C', $font_families ),
			'subset' => 'latin,latin-ext',
		);
		$fonts_url = add_query_arg( $query_args, "$protocol://fonts.googleapis.com/css" );
	}

	return $fonts_url;
}
endif;


if ( ! function_exists( 'et_core_get_theme_info' ) ):
function et_core_get_theme_info( $key ) {
	static $theme_info = null;

	if ( ! $theme_info ) {
		$theme_info = wp_get_theme();

		if ( defined( 'STYLESHEETPATH' ) && is_child_theme() ) {
			$theme_info = wp_get_theme( $theme_info->parent_theme );
		}
	}

	return $theme_info->display( $key );
}
endif;


if ( ! function_exists( 'et_core_get_third_party_components' ) ):
function et_core_get_third_party_components( $group = '' ) {
	static $third_party_components = null;

	if ( null !== $third_party_components ) {
		return $third_party_components;
	}

	/**
	 * 3rd-party components can be registered by adding the class instance to this array using it's name as the key.
	 *
	 * @since 1.1.0
	 *
	 * @param array $third_party {
	 *     An array mapping third party component names to a class instance reference.
	 *
	 *     @type ET_Core_3rdPartyComponent $name The component class instance.
	 *     ...
	 * }
	 * @param string $group If not empty, only components classified under this group should be included.
	 */
	return $third_party_components = apply_filters( 'et_core_get_third_party_components', array(), $group );
}
endif;


if ( ! function_exists( 'et_core_get_memory_limit' ) ):
/**
 * Returns the current php memory limit in megabytes as an int.
 *
 * @return int
 */
function et_core_get_memory_limit() {
	// Do NOT convert value to the integer, because wp_convert_hr_to_bytes() expects raw value from php_ini like 128M, 256M, 512M, etc
	$limit = @ini_get( 'memory_limit' );
	$mb_in_bytes = 1024*1024;
	$bytes = max( wp_convert_hr_to_bytes( $limit ), $mb_in_bytes );

	return ceil( $bytes / $mb_in_bytes );
}
endif;


if ( ! function_exists( 'et_core_initialize_component_group' ) ):
function et_core_initialize_component_group( $slug, $init_file = null ) {
	$slug = strtolower( $slug );

	if ( null !== $init_file && file_exists( $init_file ) ) {
		// Load and run component group's init function
		require_once $init_file;

		$init = "et_core_{$slug}_init";

		$init();
	}

	/**
	 * Fires when a Core Component Group is loaded.
	 *
	 * The dynamic portion of the hook name, `$group`, refers to the name of the Core Component Group that was loaded.
	 *
	 * @since 1.0.0
	 */
	do_action( "et_core_{$slug}_loaded" );
}
endif;


if ( ! function_exists( 'et_core_is_builder_used_on_current_request' ) ) :
function et_core_is_builder_used_on_current_request() {
	static $builder_used = null;

	if ( null !== $builder_used ) {
		return $builder_used;
	}

	global $wp_query;

	if ( ! $wp_query ) {
		ET_Core_Logger::error( 'Called too early! $wp_query is not available.' );
		return false;
	}

	$builder_used = false;

	if ( ! empty( $wp_query->posts ) ) {
		foreach ( $wp_query->posts as $post ) {
			if ( 'on' === get_post_meta( $post->ID, '_et_pb_use_builder', true ) ) {
				$builder_used = true;
				break;
			}
		}
	} else if ( ! empty( $wp_query->post ) ) {
		if ( 'on' === get_post_meta( $wp_query->post->ID, '_et_pb_use_builder', true ) ) {
			$builder_used = true;
		}
	}

	return $builder_used = apply_filters( 'et_core_is_builder_used_on_current_request', $builder_used );
}
endif;


if ( ! function_exists( 'et_core_is_fb_enabled' ) ):
function et_core_is_fb_enabled() {
	return function_exists( 'et_fb_is_enabled' ) && et_fb_is_enabled();
}
endif;

if ( ! function_exists( 'et_core_is_saving_builder_modules_cache' ) ):
function et_core_is_saving_builder_modules_cache() {
	// This filter is set when Modules Cache is being saved.
	return apply_filters( 'et_builder_modules_is_saving_cache', false );
}
endif;


/**
 * Is Gutenberg active?
 *
 * @since 3.19.2 Renamed from {@see et_is_gutenberg_active()} and moved to core.
 * @since 3.18
 *
 * @return bool  True - if the plugin is active
 */
if ( ! function_exists( 'et_core_is_gutenberg_active' ) ):
function et_core_is_gutenberg_active() {
	global $wp_version;

	static $has_wp5_plus = null;

	if ( is_null( $has_wp5_plus ) ) {
		$has_wp5_plus = version_compare( $wp_version, '5.0-alpha1', '>=' );
	}

	return $has_wp5_plus || function_exists( 'is_gutenberg_page' );
}
endif;


/**
 * Is Gutenberg active and enabled for the current post
 * WP 5.0 WARNING - don't use before global post has been set
 *
 * @since 3.19.2 Renamed from {@see et_is_gutenberg_enabled()} and moved to core.
 * @since 3.18
 *
 * @return bool  True - if the plugin is active and enabled.
 */
if ( ! function_exists( 'et_core_is_gutenberg_enabled' ) ):
function et_core_is_gutenberg_enabled() {
	if ( function_exists( 'is_gutenberg_page' ) ) {
		return et_core_is_gutenberg_active() && is_gutenberg_page() && has_filter( 'replace_editor', 'gutenberg_init' );
	}

	return et_core_is_gutenberg_active() && function_exists( 'use_block_editor_for_post' ) && use_block_editor_for_post( null );
}
endif;


if ( ! function_exists( 'et_core_load_main_fonts' ) ) :
function et_core_load_main_fonts() {
	$fonts_url = et_core_get_main_fonts();
	if ( empty( $fonts_url ) ) {
		return;
	}

	wp_enqueue_style( 'et-core-main-fonts', esc_url_raw( $fonts_url ), array(), null );
}
endif;


if ( ! function_exists( 'et_core_load_main_styles' ) ) :
function et_core_load_main_styles( $hook ) {
	if ( ! in_array( $hook, array( 'post.php', 'post-new.php' ) ) ) {
		return;
	}

	wp_enqueue_style( 'et-core-admin' );
}
endif;


if ( ! function_exists( 'et_core_maybe_set_updated' ) ):
function et_core_maybe_set_updated() {
	// TODO: Move et_{*}_option() functions to core.
	$last_core_version = get_option( 'et_core_version', '' );

	if ( ET_CORE_VERSION === $last_core_version ) {
		return;
	}

	update_option( 'et_core_version', ET_CORE_VERSION );

	define( 'ET_CORE_UPDATED', true );
}
endif;


if ( ! function_exists( 'et_core_maybe_patch_old_theme' ) ):
function et_core_maybe_patch_old_theme() {
	if ( ! ET_Core_Logger::php_notices_enabled() ) {
		return;
	}

	if ( get_transient( 'et_core_needs_old_theme_patch' ) ) {
		add_action( 'after_setup_theme', 'ET_Core_Logger::disable_php_notices', 9 );
		add_action( 'after_setup_theme', 'ET_Core_Logger::enable_php_notices', 11 );
		return;
	}

	$themes         = array( 'Divi' => '3.0.41', 'Extra' => '2.0.40' );
	$current_theme  = et_core_get_theme_info( 'Name' );

	if ( ! in_array( $current_theme, array_keys( $themes ) ) ) {
		return;
	}

	$theme_version = et_core_get_theme_info( 'Version' );

	if ( version_compare( $theme_version, $themes[ $current_theme ], '<' ) ) {
		add_action( 'after_setup_theme', 'ET_Core_Logger::disable_php_notices', 9 );
		add_action( 'after_setup_theme', 'ET_Core_Logger::enable_php_notices', 11 );
		set_transient( 'et_core_needs_old_theme_patch', true, DAY_IN_SECONDS );
	}
}
endif;


if ( ! function_exists( 'et_core_patch_core_3061' ) ):
function et_core_patch_core_3061() {
	if ( '3.0.61' !== ET_CORE_VERSION ) {
		return;
	}

	if ( ! ET_Core_PageResource::can_write_to_filesystem() ) {
		return; // Should we display a notice in the dashboard?
	}

	$old_file = ET_CORE_PATH . 'init.php';
	$new_file = dirname( __FILE__ ) . '/init.php';

	ET_Core_PageResource::startup();

	if ( ! ET_Core_PageResource::$wpfs ) {
		return;
	}

	ET_Core_PageResource::$wpfs->copy( $new_file, $old_file, true, 0644 );
	et_core_clear_transients();
}
endif;


if ( ! function_exists( 'et_core_register_admin_assets' ) ) :
/**
 * Register Core admin assets.
 *
 * @since 1.0.0
 *
 * @private
 */
function et_core_register_admin_assets() {
	wp_register_style( 'et-core-admin', ET_CORE_URL . 'admin/css/core.css', array(), ET_CORE_VERSION );
	wp_register_script( 'et-core-admin', ET_CORE_URL . 'admin/js/core.js', array(
			'jquery',
			'jquery-ui-tabs',
			'jquery-form'
	), ET_CORE_VERSION );
	wp_localize_script( 'et-core-admin', 'etCore', array(
		'ajaxurl' => is_ssl() ? admin_url( 'admin-ajax.php' ) : admin_url( 'admin-ajax.php', 'http' ),
		'text'    => array(
			'modalTempContentCheck' => esc_html__( 'Got it, thanks!', ET_CORE_TEXTDOMAIN ),
		),
	) );

	// enqueue common scripts as well
	et_core_register_common_assets();
}
endif;
add_action( 'admin_enqueue_scripts', 'et_core_register_admin_assets' );

if ( ! function_exists( 'et_core_register_common_assets' ) ) :
/**
 * Register and Enqueue Common Core assets.
 *
 * @since 1.0.0
 *
 * @private
 */
function et_core_register_common_assets() {
	// common.js needs to be located at footer after waypoint, fitvid, & magnific js to avoid broken javascript on Facebook in-app browser
	wp_register_script( 'et-core-common', ET_CORE_URL . 'admin/js/common.js', array( 'jquery' ), ET_CORE_VERSION, true );
	wp_enqueue_script( 'et-core-common' );
}
endif;

// common.js needs to be loaded after waypoint, fitvid, & magnific js to avoid broken javascript on Facebook in-app browser, hence the 15 priority
add_action( 'wp_enqueue_scripts', 'et_core_register_common_assets', 15 );

if ( ! function_exists( 'et_core_noconflict_styles_gform' ) ) :
/**
 * Register Core styles with Gravity Forms so that they're enqueued when running on no-conflict mode
 *
 * @since 3.21.2
 *
 * @param $styles
 *
 * @return array
 */
function et_core_noconflict_styles_gform( $styles ) {
	$styles[] = 'et-core-admin';

	return $styles;
}
endif;
add_filter( 'gform_noconflict_styles', 'et_core_noconflict_scripts_gform' );

if ( ! function_exists( 'et_core_noconflict_scripts_gform' ) ) :
/**
 * Register Core scripts with Gravity Forms so that they're enqueued when running on no-conflict mode
 *
 * @since 3.21.2
 *
 * @param $scripts
 *
 * @return array
 */
function et_core_noconflict_scripts_gform( $scripts ) {
	$scripts[] = 'et-core-admin';
	$scripts[] = 'et-core-common';

	return $scripts;
}
endif;
add_filter( 'gform_noconflict_scripts', 'et_core_noconflict_scripts_gform' );

if ( ! function_exists( 'et_core_security_check' ) ):
/**
 * Check if current user can perform an action and/or verify a nonce value. die() if not authorized.
 *
 * @examples:
 *   - Check if user can 'manage_options': `et_core_security_check();`
 *   - Verify a nonce value: `et_core_security_check( '', 'nonce_name' );`
 *   - Check if user can 'something' and verify a nonce value: `self::do_security_check( 'something', 'nonce_name' );`
 *
 * @param string $user_can       The name of the capability to check with `current_user_can()`.
 * @param string $nonce_action   The name of the nonce action to check (excluding '_nonce').
 * @param string $nonce_key      The key to use to lookup nonce value in `$nonce_location`. Default
 *                               is the value of `$nonce_action` with '_nonce' appended to it.
 * @param string $nonce_location Where the nonce is stored (_POST|_GET|_REQUEST). Default: _POST.
 * @param bool   $die            Whether or not to `die()` on failure. Default is `true`.
 *
 * @return bool|null Whether or not the checked passed if `$die` is `false`.
 */
function et_core_security_check( $user_can = 'manage_options', $nonce_action = '', $nonce_key = '', $nonce_location = '_POST', $die = true ) {
	$user_can     = (string) $user_can;
	$nonce_action = (string) $nonce_action;
	$nonce_key    = (string) $nonce_key;

	if ( empty( $nonce_key ) && false === strpos( $nonce_action, '_nonce' ) ) {
		$nonce_key = $nonce_action . '_nonce';
	} else if ( empty( $nonce_key ) ) {
		$nonce_key = $nonce_action;
	}

	// phpcs:disable WordPress.Security.NonceVerification.NoNonceVerification
	switch( $nonce_location ) {
		case '_POST':
			$nonce_location = $_POST;
			break;
		case '_GET':
			$nonce_location = $_GET;
			break;
		case '_REQUEST':
			$nonce_location = $_REQUEST;
			break;
		default:
			return $die ? et_core_die() : false;
	}
	// phpcs:enable

	$passed = true;

	if ( is_numeric( $user_can ) ) {
		// Numeric values are deprecated in current_user_can(). We do not accept them here.
		$passed = false;

	} else if ( '' !== $nonce_action && empty( $nonce_location[ $nonce_key ] ) ) {
		// A nonce value is required when a nonce action is provided.
		$passed = false;

	} else if ( '' === $user_can && '' === $nonce_action ) {
		// At least one of a capability OR a nonce action is required.
		$passed = false;

	} else if ( '' !== $user_can && ! current_user_can( $user_can ) ) {
		// Capability check failed.
		$passed = false;

	} else if ( '' !== $nonce_action && ! wp_verify_nonce( $nonce_location[ $nonce_key ], $nonce_action ) ) {
		// Nonce verification failed.
		$passed = false;
	}

	if ( $die && ! $passed ) {
		et_core_die();
	}

	return $passed;
}
endif;


if ( ! function_exists( 'et_core_security_check_passed' ) ):
/**
 * Wrapper for {@see et_core_security_check()} that disables `die()` on failure.
 *
 * @see et_core_security_check() for parameter documentation.
 *
 * @return bool Whether or not the security check passed.
 */
function et_core_security_check_passed( $user_can = 'manage_options', $nonce_action = '', $nonce_key = '', $nonce_location = '_POST' ) {
	return et_core_security_check( $user_can, $nonce_action, $nonce_key, $nonce_location, false );
}
endif;


if ( ! function_exists( 'et_core_setup' ) ) :
/**
 * Setup Core.
 *
 * @since 1.0.0
 * @since 3.0.60 The `$url` param is deprecated.
 *
 * @param string $deprecated Deprecated parameter.
 */
function et_core_setup( $deprecated = '' ) {
	if ( defined( 'ET_CORE_PATH' ) ) {
		return;
	}

	$core_path = _et_core_normalize_path( trailingslashit( dirname( __FILE__ ) ) );
	$theme_dir = _et_core_normalize_path( trailingslashit( realpath( get_template_directory() ) ) );

	if ( 0 === strpos( $core_path, $theme_dir ) ) {
		$url = get_template_directory_uri() . '/core/';
	} else {
		$url = plugin_dir_url( __FILE__ );
	}

	define( 'ET_CORE_PATH', $core_path );
	define( 'ET_CORE_URL', $url );
	define( 'ET_CORE_TEXTDOMAIN', 'et-core' );

	load_theme_textdomain( 'et-core', ET_CORE_PATH . 'languages/' );
	et_core_maybe_set_updated();
	et_new_core_setup();

	register_shutdown_function( 'ET_Core_PageResource::shutdown' );

	if ( is_admin() || ! empty( $_GET['et_fb'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.NoNonceVerification
		add_action( 'admin_enqueue_scripts', 'et_core_load_main_styles' );
	}

	et_core_maybe_patch_old_theme();
}
endif;


if ( ! function_exists( 'et_force_edge_compatibility_mode' ) ) :
function et_force_edge_compatibility_mode() {
	echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
}
endif;
add_action( 'et_head_meta', 'et_force_edge_compatibility_mode' );


if ( ! function_exists( 'et_get_allowed_localization_html_elements' ) ) :
function et_get_allowed_localization_html_elements() {
	$whitelisted_attributes = array(
		'id'    => array(),
		'class' => array(),
		'style' => array(),
	);

	$whitelisted_attributes = apply_filters( 'et_allowed_localization_html_attributes', $whitelisted_attributes );

	$elements = array(
		'a'      => array(
			'href'   => array(),
			'title'  => array(),
			'target' => array(),
			'rel'    => array(),
		),
		'b'      => array(),
		'br'     => array(),
		'em'     => array(),
		'p'      => array(),
		'span'   => array(),
		'div'    => array(),
		'strong' => array(),
		'code'   => array(),
	);

	$elements = apply_filters( 'et_allowed_localization_html_elements', $elements );

	foreach ( $elements as $tag => $attributes ) {
		$elements[ $tag ] = array_merge( $attributes, $whitelisted_attributes );
	}

	return $elements;
}
endif;


if ( ! function_exists( 'et_get_safe_localization' ) ) :
function et_get_safe_localization( $string ) {
	return apply_filters( 'et_get_safe_localization', wp_kses( $string, et_get_allowed_localization_html_elements() ) );
}
endif;

if ( ! function_exists( 'et_get_theme_version' ) ) :
function et_get_theme_version() {
	$theme_info = wp_get_theme();

	if ( is_child_theme() ) {
		$theme_info = wp_get_theme( $theme_info->parent_theme );
	}

	$theme_version = $theme_info->display( 'Version' );

	return $theme_version;
}
endif;

if ( ! function_exists( 'et_new_core_setup') ):
function et_new_core_setup() {
	$has_php_52x = -1 === version_compare( PHP_VERSION, '5.3' );

	require_once ET_CORE_PATH . 'components/Updates.php';
	require_once ET_CORE_PATH . 'components/init.php';
	require_once ET_CORE_PATH . 'wp_functions.php';

	if ( $has_php_52x ) {
		spl_autoload_register( 'et_core_autoloader', true );
	} else {
		spl_autoload_register( 'et_core_autoloader', true, true );
	}

	// Initialize top-level components "group"
	$hook = did_action( 'plugins_loaded' ) ?  'after_setup_theme' : 'plugins_loaded';
	add_action( $hook, 'et_core_init', 9999999 );
}
endif;


if ( ! function_exists( 'et_core_add_crossorigin_attribute' ) ):
function et_core_add_crossorigin_attribute( $tag, $handle, $src ) {
	if ( ! $handle || ! in_array( $handle, array( 'react', 'react-dom' ) ) ) {
		return $tag;
	}

	return sprintf( '<script src="%1$s" crossorigin></script>', esc_attr( $src ) ); // phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedScript
}
endif;


if ( ! function_exists( 'et_core_get_version_from_filesystem' ) ):
/**
 * Get the core version from the filesystem.
 * This is necessary in cases such as Version Rollback where you cannot use
 * a constant from memory as it is outdated or you wish to get the version
 * not from the active (latest) core but from a different one.
 *
 * @param string $core_directory
 *
 * @return string
 */
function et_core_get_version_from_filesystem( $core_directory ) {
	$version_file = $core_directory . DIRECTORY_SEPARATOR . '_et_core_version.php';

	if ( ! file_exists( $version_file ) ) {
		return '';
	}

	include $version_file;

	return $ET_CORE_VERSION;
}
endif;

if ( ! function_exists( 'et_core_replace_enqueued_style' ) ):
/**
 * Replace a style's src if it is enqueued.
 *
 * @since 3.10
 *
 * @param string $old_src
 * @param string $new_src
 * @param boolean $regex Use regex to match and replace the style src.
 *
 * @return void
 */
function et_core_replace_enqueued_style( $old_src, $new_src, $regex = false ) {
	$styles = wp_styles();

	if ( empty( $styles->registered ) ) {
		return;
	}

	foreach ( $styles->registered as $style_handle => $style ) {
		$match = $regex ? preg_match( $old_src, $style->src ) : $old_src === $style->src;
		if ( ! $match ) {
			continue;
		}

		$style_src   = $regex ? preg_replace( $old_src, $new_src, $style->src ) : $new_src;
		$style_deps  = isset( $style->deps ) ? $style->deps : array();
		$style_ver   = isset( $style->ver ) ? $style->ver : false;
		$style_media = isset( $style->args ) ? $style->args : 'all';

		// Deregister first, so the handle can be re-enqueued.
		wp_deregister_style( $style_handle );

		// Enqueue the same handle with the new src.
		wp_enqueue_style( $style_handle, $style_src, $style_deps, $style_ver, $style_media );
	}
}
endif;

if ( ! function_exists( 'et_core_is_safe_mode_active' ) ):
/**
 * Check whether the Support Center's Safe Mode is active
 *
 * @param false|string $product The ET theme or plugin checking for Safe Mode status.
 *
 * @since ?.?
 *
 * @see ET_Core_SupportCenter::toggle_safe_mode
 *
 * @return bool
 */
function et_core_is_safe_mode_active($product=false) {
	// If we're checking against a particular product, return false if the product-specific usermeta doesn't match
	if ( $product ) {
		$product = esc_attr( $product );
		if ( $product === get_user_meta( get_current_user_id(), '_et_support_center_safe_mode_product', true ) ) {
			return true;
		}
		return false;
	};

	if ( 'on' === get_user_meta( get_current_user_id(), '_et_support_center_safe_mode', true ) ) {
		return true;
	};
	return false;
}
endif;

if ( ! function_exists( 'et_core_load_component' ) ) :
/**
 * =============================
 * ----->>> DEPRECATED! <<<-----
 * =============================
 * Load Core components.
 *
 * This function loads Core components. Components are only loaded once, even if they are called many times.
 * Admin components/functions are automatically wrapped in an is_admin() check.
 *
 * @deprecated Component classes are now loaded automatically upon first use. Portability was the only component
 *             ever loaded by this function, so it now only handles that single use-case (for backwards compatibility).
 *
 * @param string|array $components Name of the Core component(s) to include as and indexed array.
 *
 * @return bool Always return true.
 */
function et_core_load_component( $components ) {
	static $portability_loaded = false;

	if ( $portability_loaded || empty( $components ) ) {
		return true;
	}

	$is_jetpack = isset( $_SERVER['HTTP_USER_AGENT'] ) && false !== strpos( $_SERVER['HTTP_USER_AGENT'], 'Jetpack' );

	if ( ! $is_jetpack && ! is_admin() && empty( $_GET['et_fb'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.NoNonceVerification
		return true;
	}

	if ( ! class_exists( 'ET_Core_Portability', false ) ) {
		include_once ET_CORE_PATH . 'components/Cache.php';
		include_once ET_CORE_PATH . 'components/Portability.php';
	}

	return $portability_loaded = true;
}
endif;

if ( ! function_exists( 'et_core_add_allowed_protocols' ) ) :
/**
 * Extend the whitelist of allowed URL protocols
 *
 * @param array $protocols List of URL protocols allowed by WordPress.
 *
 * @since 3.27.2
 *
 * @return array Our extended list of URL protocols.
 */
function et_core_add_allowed_protocols( $protocols = array() ) {
	$additional = array(
		'sms', // Add SMS text messaging protocol
	);
	$protocols  = array_unique( array_merge( $protocols, $additional ) );

	return $protocols;
}
add_filter( 'kses_allowed_protocols', 'et_core_add_allowed_protocols' );
endif;

if ( ! function_exists( 'et_is_responsive_images_enabled' ) ):
/**
 * Get the responsive images setting whether is enabled or not
 *
 * @since 3.27.1
 *
 * @return bool
 */
function et_is_responsive_images_enabled() {
	global $shortname;
	static $enable_responsive_images;

	// Fetch the option once
	if ( null === $enable_responsive_images ) {
		$enable_responsive_images = et_get_option( "{$shortname}_enable_responsive_images", 'on' );
	}

	return 'on' === $enable_responsive_images;
}
endif;

if ( ! function_exists( 'et_screen_sizes' ) ) :
/**
 * Get screen sizes list.
 *
 * @since 3.27.1
 *
 * @return array
 */
function et_screen_sizes() {
	return array(
		'desktop' => 1280,
		'tablet'  => 980,
		'phone'   => 480,
	);
}
endif;

if ( ! function_exists( 'et_image_get_responsive_size' ) ) :
/**
 * Get images responsive sizes.
 *
 * @since 3.27.1
 *
 * @param int    $orig_width Original image's width.
 * @param int    $orig_height Original image's height.
 * @param string $breakpoint Screen breakpont. See et_screen_sizes().
 *
 * @return array|boolean Image responsive width & height. False on failure.
 */
function et_image_get_responsive_size( $orig_width, $orig_height, $breakpoint ) {
	$et_screen_sizes = et_screen_sizes();

	if ( ! isset( $et_screen_sizes[ $breakpoint ] ) ) {
		return false;
	}

	$new_width = $et_screen_sizes[ $breakpoint ];

	if ( $new_width >= $orig_width ) {
		return false;
	}

	$ratio = ( $orig_width * 1.0 ) / $orig_height;

	$new_height = round( ( $new_width / $ratio ) );

	return array(
		'width'  => $new_width,
		'height' => $new_height,
	);
}
endif;

if ( ! function_exists( 'et_image_add_srcset_and_sizes' ) ) :
/**
 * Add ‘srcset’ and ‘sizes’ attributes to an existing ‘img’ element.
 *
 * @param string  $image Image HTML markup.
 * @param boolean $echo  Is print the output?
 *
 * @return string
 */
function et_image_add_srcset_and_sizes( $image, $echo = false ) {
	static $srcset_and_sizes_cached = array();

	// Check if option is enabled.
	if ( ! et_is_responsive_images_enabled() ) {
		if ( $echo ) {
			echo et_core_intentionally_unescaped( $image, 'html' );
		}

		return $image;
	}

	$src = et_get_src_from_img_tag( $image );

	$cache_key = $src ? $src : 'empty-src';

	if ( isset( $srcset_and_sizes_cached[ $cache_key ] ) ) {
		$image = $srcset_and_sizes_cached[ $cache_key ];
	} else {
		// Only process if src attribute is not empty.
		if ( $src ) {
			$attachment_id = et_get_attachment_id_by_url( $src );
			$image_meta    = false;

			if ( $attachment_id ) {
				$image_meta = wp_get_attachment_metadata( $attachment_id );
			}

			if ( $image_meta ) {
				$image = wp_image_add_srcset_and_sizes( $image, $image_meta, $attachment_id );
			}
		}

		$srcset_and_sizes_cached[ $cache_key ] = $image;
	}

	if ( $echo ) {
		echo et_core_intentionally_unescaped( $image, 'html' );
	}

	return $image;
}
endif;

if ( ! function_exists( 'et_get_attachment_id_by_url' ) ) :
/**
 * Tries to get attachment ID by URL.
 *
 * @since 3.27.1
 *
 * @param string $url The URL being looked up.
 *
 * @return int The attachment ID found, or 0 on failure.
 */
function et_get_attachment_id_by_url( $url ) {
	global $wpdb;
	$cache = ET_Core_Cache_File::get( 'attachment_id_by_url' );

	$attachment_id = 0;

	// Normalize image URL.
	$url = et_attachment_normalize_url( $url );

	$cache_key = $url ? $url : 'empty-url';

	if ( isset( $cache[ $cache_key ] ) ) {
		return $cache[ $cache_key ];
	}

	// Bail early if URL is invalid.
	if ( ! $url ) {
		return $attachment_id;
	}

	// Remove any thumbnail size suffix from the filename and use that as a fallback.
	$fallback_url = preg_replace( '/-(\d+)x(\d+)\.(jpg|jpeg|gif|png)$/', '.$3', $url );

	// Scenario: Trying to find the attachment for a file called x-150x150.jpg.
	// 1. Since WordPress adds the -150x150 suffix for thumbnail sizes we cannot be
	// sure if this is an attachment or an attachment's generated thumbnail.
	// 2. Since both x.jpg and x-150x150.jpg can be uploaded as separate attachments
	// we must decide which is a better match.
	// 3. The above is why we order by guid length and use the first result.
	$attachments_query = $wpdb->prepare(
		"SELECT id
		FROM $wpdb->posts
		WHERE `post_type` = %s
			AND `guid` IN ( %s, %s )
		ORDER BY CHAR_LENGTH( `guid` ) DESC",
		'attachment',
		esc_url_raw( $url ),
		esc_url_raw( $fallback_url )
	);

	$attachment_id = (int) $wpdb->get_var( $attachments_query );

	$cache[ $cache_key ] = $attachment_id;
	ET_Core_Cache_File::set( 'attachment_id_by_url', $cache );

	return $attachment_id;
}
endif;

if ( ! function_exists( 'et_get_attachment_size_by_url' ) ) :
/**
 * Tries to get attachment size by URL.
 *
 * @since 3.27.1
 *
 * @param string $url The URL being looked up.
 * @param string $default_size Default size name on failure.
 *
 * @return array|string Detected image size width and height or 'full' on failure.
 */
function et_get_attachment_size_by_url( $url, $default_size = 'full' ) {
	// Normalize image URL.
	$url = et_attachment_normalize_url( $url );

	// Bail eraly if URL is invalid.
	if ( ! $url ) {
		return $default_size;
	}

	// Get the image width and height.
	// Example: https://regex101.com/r/7JwGz7/1.
	if ( preg_match( '/-(\d+)x(\d+)\.(jpg|jpeg|gif|png)$/', $url, $match ) ) {
		return array( $match[1], $match[2] );
	}

	return $default_size;
}
endif;

if ( ! function_exists( 'et_attachment_normalize_url' ) ) :
/**
 * Tries to normalize attachment URL
 *
 * @since 3.27.1
 *
 * @param string $url The URL being looked up.
 *
 * @return string|bool Normalized image URL or false on failure.
 */
function et_attachment_normalize_url( $url ) {
	// Remove URL query and string after
	list( $url ) = explode( '?', $url );

	// Fixes the issue with x symbol between width and height values in the filename.
	$url = str_replace( '%26%23215%3B', 'x', rawurlencode( $url ) );

	// Decode the URL.
	$url = rawurldecode( $url );

	// Set as full path URL.
	if ( 0 !== strpos( $url, 'http' ) ) {
		$url = site_url( $url );
	}

	// Validate URL format and file extension.
	// Example: https://regex101.com/r/dXcpto/1.
	if ( ! preg_match( '/^(http(s?)\:\/\/)(.+)\.(jpg|jpeg|gif|png)$/', $url ) ) {
		return false;
	}

	return esc_url( $url );
}
endif;

if ( ! function_exists( 'et_get_src_from_img_tag' ) ) :
/**
 * Get src attribute value from image tag
 *
 * @since 3.27.1
 *
 * @param string $image The HTML image tag to look up.
 *
 * @return string|bool Src attribute value. False on failure.
 */
function et_get_src_from_img_tag( $image ) {
	// Parse src attributes using regex.
	// Example: https://regex101.com/r/kY6Gdd/1.
	if ( preg_match( '/^<img.+src=[\'"](?P<src>.+?)[\'"].*>/', $image, $match ) ) {
		if ( isset( $match['src'] ) ) {
			return $match['src'];
		}
	}

	// Parse src attributes using DOMDocument when regex is failed.
	if ( class_exists( 'DOMDocument' ) && class_exists( 'DOMXPath' ) ) {
		$doc = new DOMDocument();
		$doc->loadHTML( $image );

		$xpath = new DOMXPath( $doc );
		return $xpath->evaluate( 'string(//img/@src)' );
	}

	return false;
}
endif;

if ( ! function_exists( 'et_core_enqueue_js_admin' ) ) :
function et_core_enqueue_js_admin() {
	global $themename;

	$epanel_jsfolder = ET_CORE_URL . 'admin/js';

	et_core_load_main_fonts();

	wp_register_script( 'epanel_colorpicker', $epanel_jsfolder . '/colorpicker.js', array(), et_get_theme_version() );
	wp_register_script( 'epanel_eye', $epanel_jsfolder . '/eye.js', array(), et_get_theme_version() );
	wp_register_script( 'epanel_checkbox', $epanel_jsfolder . '/checkbox.js', array(), et_get_theme_version() );
	wp_enqueue_script( 'wp-color-picker' );
	wp_enqueue_style( 'wp-color-picker' );

	$wp_color_picker_alpha_uri = defined( 'ET_BUILDER_URI' ) ? ET_BUILDER_URI . '/scripts/ext/wp-color-picker-alpha.min.js' : $epanel_jsfolder . '/wp-color-picker-alpha.min.js';

	wp_enqueue_script( 'wp-color-picker-alpha', $wp_color_picker_alpha_uri, array(
		'jquery',
		'wp-color-picker',
	), et_get_theme_version(), true );

	if ( ! wp_script_is( 'epanel_functions_init', 'enqueued' ) ) {
		wp_enqueue_script( 'epanel_functions_init', $epanel_jsfolder . '/functions-init.js', array(
			'jquery',
			'jquery-ui-tabs',
			'jquery-form',
			'epanel_colorpicker',
			'epanel_eye',
			'epanel_checkbox',
			'wp-color-picker-alpha',
		), et_get_theme_version() );
		wp_localize_script( 'epanel_functions_init', 'ePanelishSettings', array(
			'clearpath'       => get_template_directory_uri() . '/epanel/images/empty.png',
			'epanelish_nonce' => wp_create_nonce( 'epanelish_nonce' ),
			'help_label'      => esc_html__( 'Help', $themename ),
			'et_core_nonces'  => et_core_get_nonces(),
		) );
	}

	// Use WP 4.9 CodeMirror Editor for some fields
	if ( function_exists( 'wp_enqueue_code_editor' ) ) {
		wp_enqueue_code_editor(
			array(
				'type' => 'text/css',
			)
		);
		// Required for Javascript mode
		wp_enqueue_script( 'jshint' );
		wp_enqueue_script( 'htmlhint' );
	}
}
endif;
