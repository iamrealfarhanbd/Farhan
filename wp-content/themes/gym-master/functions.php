<?php
/**
 * gym-master functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package gym-master
 */

if ( ! function_exists( 'gym_master_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function gym_master_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on gym-master, use a find and replace
		 * to change 'gym_master' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'gym_master', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );
		add_image_size('gym-master-slider-image', 1280, 853 , true);
		add_image_size('gym-master-team-image', 264 , 350 , true);
		add_image_size('gym-master-service-image', 280 , 355 , true);

		/*Add Post Formate Support*/
		add_theme_support( 'post-formats', array( 'gallery', 'image', 'video') );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		
		add_theme_support( 'post-thumbnails' );


		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'gym-master' ),
			'social-media'  => esc_html__( 'Social Media', 'gym-master' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'gym_master_custom_background_args', array(
			'default-color' => '#111521',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );	
	}
endif;
add_action( 'after_setup_theme', 'gym_master_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function gym_master_content_width() {
	
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	
	$GLOBALS['content_width'] = apply_filters( 'gym_master_content_width', 640 );
}

add_action( 'after_setup_theme', 'gym_master_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function gym_master_widgets_init() {

	register_sidebar( array(
		'name'          => esc_html__( 'Right Sidebar', 'gym-master' ),
		'id'            => 'gym-master-sidebar-right',
		'description'   => esc_html__( 'Add widgets here.', 'gym-master' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
		)
    );
	register_sidebar( array(
		'name'          => esc_html__( 'Left Sidebar', 'gym-master' ),
		'id'            => 'gym-master-sidebar-left',
		'description'   => esc_html__( 'Add widgets here.', 'gym-master' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
		)
	 );
	register_sidebar( array(
		'name'          => esc_html__( 'Gym Master Footer One', 'gym-master' ),
		'id'            => 'gym-master-footer',
		'description'   => esc_html__( 'Add widgets here.', 'gym-master' ),
		'before_widget' => '<section id="%1$s" class="widget Title %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
		) 
	);
	register_sidebar( array(
		'name'          => esc_html__( 'Gym Master Footer Two', 'gym-master' ),
		'id'            => 'gym-master-footer-two',
		'description'   => esc_html__( 'Add widgets here.', 'gym-master' ),
		'before_widget' => '<div id="%1$s" class=" widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
		) 
	);
	register_sidebar( array(
		'name'          => esc_html__( 'Gym Master Footer Three', 'gym-master' ),
		'id'            => 'gym-master-footer-three',
		'description'   => esc_html__( 'Add widgets here.', 'gym-master' ),
		'before_widget' => '<div id="%1$s" class=" widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
		) 
	);
	
}
add_action( 'widgets_init', 'gym_master_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function gym_master_scripts() {

	$gym_master_font_args = array(

	'family' => 'Fauna+One|Roboto+Condensed:300,300i,400,400i,700,700i',
	);

	wp_enqueue_style( 'gym-master-google-fonts', add_query_arg( $gym_master_font_args, "//fonts.googleapis.com/css" ) );

	// Load Slick Css
    wp_enqueue_style( 'slick', get_template_directory_uri().'/assets/css/slick.css',array(), '1.8.0', 'all' );

    // Load Slick Theme Css
    wp_enqueue_style( 'slick-theme-css', get_template_directory_uri().'/assets/css/slick-theme.css',array(), ' 1.8.0', 'all' );

	// Font Awesome  CSS
	wp_enqueue_style( 'fontawesome', get_template_directory_uri().'/assets/css/font-awesome.css',array(), '4.7.0', 'all' );

	// Load Animate Css
	wp_enqueue_style( 'animate', get_template_directory_uri().'/assets/css/animate.css',array(), ' 3.7.0', 'all' );

	// Magnific CSs
	wp_enqueue_style( 'magnific-popup-css', get_template_directory_uri().'/assets/css/magnific-popup.css',array(), ' v1.1.0', 'all' );

	// Meanmenu CSS
	wp_enqueue_style( 'meanmenu', get_template_directory_uri().'/assets/css/meanmenu.css',array(), '2.0.7 ', 'all' );

	wp_enqueue_style( 'gym-master-style', get_stylesheet_uri() );

	// Load Sticky
	wp_enqueue_script( 'jquery-heia-sticky-sidebar-js', get_template_directory_uri().'/assets/js/theia-sticky-sidebar.js', array( 'jquery' ), 'v1.7.0', true );

	// ResizeSensor Js
	wp_enqueue_script( 'jquery-ResizeSensor', get_template_directory_uri().'/assets/js/ResizeSensor.js', array( 'jquery' ), ' 0.2.4', true );

	// Load Slick
	wp_enqueue_script( 'jquery-slick-min-js', get_template_directory_uri().'/assets/js/slick.min.js', array( 'jquery' ), '1.9.0', true );

	// Mean Menu JS
	wp_enqueue_script( 'jquery-meanmenu', get_template_directory_uri().'/assets/js/jquery.meanmenu.js', array( 'jquery' ), 'v2.0.8', true );

	// Magnific Popup Js
	wp_enqueue_script( 'jquery-magnific-popup-js', get_template_directory_uri().'/assets/js/jquery.magnific-popup.js', array( 'jquery' ), ' v1.1.0', true );
	
	// Wow JS
	wp_enqueue_script( 'jquery-wow', get_template_directory_uri().'/assets/js/wow.min.js', array( 'jquery' ), '1.1.3', true );

	// Isotop  JS
   	wp_enqueue_script( 'jquery-isotope-min-js', get_template_directory_uri().'/assets/js/isotope.min.js', array( 'jquery' ), 'v3.0.6', true );
	   	
	wp_enqueue_script( 'gym-master-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'gym-master-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
	//custom
	wp_enqueue_script( 'gym-master-custom', get_template_directory_uri() . '/assets/js/custom.js', array('jquery'), '1.0.0', true );	
}

add_action( 'wp_enqueue_scripts', 'gym_master_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';
/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';
/**
 * Load Custom Header Functions File.
 */
require get_template_directory() . '/inc/hook/header-hook.php';  
/**
 * Load Custom Footer Functions File.
 */

require get_template_directory() . '/inc/hook/footer-hook.php';
/**
 * Load Custom Breadcrumb Functions File.
 */
require get_template_directory() . '/inc/hook/header-breadcrumb.php';

/**
 * Load Custom Slider Functions File.
 */
require get_template_directory() . '/inc/hook/main-hook-slider.php';
/**
 * Load Custom Custom Customizer Functions File.
 */
require get_template_directory() . '/inc/hook/customizer-hook.php';
/**
 * Gym Master Metabox
 */
require  get_template_directory()  . '/inc/metabox.php';
/**
 * Load Custom functions file.
 */
require get_template_directory() . '/inc/custom-function/gym-master-function.php';
/**
 * Gym Master Customizer 
 */
require get_template_directory() . '/inc/customizer/customizer-options.php';
/** TGM Plugins Activations  **/
require get_template_directory() . '/inc/class-tgm-plugin-activation.php';
/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
