<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'farhan' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Yo%j~R:/N4kz|-7eq9tM$B)SRhA;~w[MU8GVC)*m0xhck&^OT{7J[WWcTQ*)YFir' );
define( 'SECURE_AUTH_KEY',  'bY!V<=%0u +Spt@2BuqV/%;&_VSU: 3nNi KItSb[p)xebUAI0+&Lt]n1R~M(l~d' );
define( 'LOGGED_IN_KEY',    '$2&6cJgZ?.WkKRY)h;HO,#Zs+t7E4g@A kMAZGW.@TCL%lXozI/6z]n918W;rA+e' );
define( 'NONCE_KEY',        '6BwLFW,-fz|I;bfMv_*o(tF`qhrA9S+tsS1I`QIM+YYT`v)i4G6jCj@KUe)Z+^qJ' );
define( 'AUTH_SALT',        'ww/:G]2}eu+4])b~XN0IzQ[e$NE#(t@4RxbT<Be#1$[Hq2wPr*i(7]?QuH@S6Ha#' );
define( 'SECURE_AUTH_SALT', '4a38N8{)4QP#sTZz,-a$X}cm~i,W#L>1p| Bc)3KJIlR[-A2AfA5V)zbpKu W(FI' );
define( 'LOGGED_IN_SALT',   'tX@YfZgy+!+09-N Po0Out,P^2dI@;M@2t3^!BzHS-9Be1$^0B.]Xvpe(I}JO-^T' );
define( 'NONCE_SALT',       '.|0wN/Q<kET)mUC96xR][WZ+z.3qO=}jwck]:;EUfCV^-#wp4oEw_:=H_pR!OljB' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'kp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
