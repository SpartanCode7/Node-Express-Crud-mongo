<?php
define( 'WP_CACHE', true ); // Added by WP Rocket

define('FS_METHOD', 'direct');
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */



define( 'WP_HOME', 'http://54.176.82.57' );
define( 'WP_SITEURL', 'http://54.176.82.57' );


// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cqtesta' );

/** Database username */
define( 'DB_USER', 'admin' );

/** Database password */
define( 'DB_PASSWORD', 'bilalsquare@' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^;+N=XF@oRZHV|3HgDA[fKp.0-T/WTLag_5FlxOSU|ozE=m#xH2C@?l^npYE/^k$' );
define( 'SECURE_AUTH_KEY',  '92nr~Q=X5hFGp{=(%MM]k>_p[4MX.obnKO@ek2h$,^2t:xYRx[q :g[#1sf*-@DE' );
define( 'LOGGED_IN_KEY',    'OX!K,WY2KL6,QWiy<.|Xd&MSvJ(fCs+2i$aB2DmM<SL5>kC)9jmB|oW;&1S]4[rg' );
define( 'NONCE_KEY',        'N3gjVJ#Aw&|bHv>ZlSmfX821<VRm[f]+[8@t{))5lv4kdebR]akeru31H>-QwRj?' );
define( 'AUTH_SALT',        'K_m@,tA1OgW0hZ=(zW>]CaR`*wv1{CaW3P cvwxzK(~?n`OtDZ<t<~TlD:8.c!tw' );
define( 'SECURE_AUTH_SALT', 'Y]xGSsQj5hHDEB2;~ud#jL+9KY`.866Bmz6|urwS_h&m}OE]yM45P;ip{Df! 7oc' );
define( 'LOGGED_IN_SALT',   'DCYg3zW}&(2wWzh)tPX[gF`WhnxQ(%P)BS}+~IBxb:^a1&hcmled62?wr<5aVtww' );
define( 'NONCE_SALT',       'bA0~zR7t9hEs^KPh~qu.R})q9!PdhEcg)u9)5EXQ>+ZS>L{hLBgzNz6P,,!`flc=' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
