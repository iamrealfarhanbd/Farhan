=== Plugin Name ===
Contributors: roycegracie,eliranefron
Donate link: http://www.zeevm.co.il
Tags: index, archive, business directory, directory, professional directory, profession directory, responsive index 
Requires at least: 3.0.1
Tested up to: 3.9.1
Stable tag: 4.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html


== Description ==

This plugin shows a dynamic grid view of categories (costume post types), each category reveals a beautiful show/hide jQuery list of posts underneath. Pressing on any of these posts redirects the user into a single page who contains elements like google map, email, phone, image and more.

Very easy to implement using this simple shortcode: [great-index]

Please see installation for more instructions and screenshots.

*this plugin is responsive :)



== Installation ==


1. Upload `Great-index folder` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. now you will see a button in your admin panel :"INDEX" where you can open categories.
4. add some posts for each categorie and don't forget to add costume details presented at the bottom of each post (like phone, email etc.)
5. create a new page and past the shortcode: [great-index]
6. that is it ! you can view that page and see your index.

== Frequently Asked Questions ==

= i dont see nothing in the page where the shortcode is in =

that is probably because you didn't added any posts under "index" so the categories are empty.

= how do i create this google map above every post ? =

under "location" you need to write the address. like: 903 E colorado, urbana, illinois.

= can i change colors etc. =

that plugin has only one CSS file, just go in and change what you want. 

= can i see the internal post, i get an 404 page =

you need to change the Permalink Settings for your site. go to "settings"--->Permalink Settings-->set it to "Post name"

== Screenshots ==

1. this is how the category view looks like

2. this is how the category view looks like after you press on one of them (opens in jquery effect)

3. this is the internal post view

== Changelog ==

= 1.0 =
this is the first version


== A brief Markdown Example ==

Ordered list:

1. more options to the admin panel for better flexibility
2. translation PO&MO files


Here's a link to [WordPress](http://wordpress.org/ "Your favorite software") and one to [Markdown's Syntax Documentation][markdown syntax].
Titles are optional, naturally.

[markdown syntax]: http://daringfireball.net/projects/markdown/syntax
            "Markdown is what the parser uses to process much of the readme file"

Markdown uses email style notation for blockquotes and I've been told:
> Asterisks for *emphasis*. Double it up  for **strong**.

`<?php code(); // goes in backticks ?>`
