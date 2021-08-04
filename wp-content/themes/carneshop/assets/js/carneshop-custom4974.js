(function($) {
	
	"use strict";


/* Blog Page Pagination change default [span] to [a] tag addition */
$('.nav-links .page-numbers li span').each(function() {
$(this).replaceWith($('<a class="active" href="#">' + this.innerHTML + '</a>'));
});

/* Blog Page Pagination screen-reader-text remove */
$('.pagination .screen-reader-text').remove();


/*
=============
S I D E B A R
=============
*/

/* Sidebar Class Addition */
$('.sidebar').addClass('default-sidebar');

/* Sidebar Categories Class Add*/
$('.widget_categories').addClass('category-widget');
$('.widget_categories ul').addClass('category-list');

$('.widget_product_categories').addClass('category-widget');
$('ul.product-categories').addClass('category-list');

$('.category-list li').append('<i class="flaticon-right"></i>');

/* Sidebar Archives Class Add*/
$('.widget_archive').addClass('sidebar-archives');
$('.widget_archive .widget-content').each(function() {
$(this).replaceWith($('<div class="widget-content"><div class="select-box">' + this.innerHTML + '</div></div>'));
});

/* Sidebar TagCloud Class Add */
$('.widget_tag_cloud').addClass('sidebar-tags');
$('.widget_product_tag_cloud').addClass('sidebar-tags');
$('.tag-cloud-link').removeAttr("style");

$('.tagcloud').addClass('tags-list clearfix');

/* Search Class Add*/
$('.widget_carneshop_recent_blog_posts').addClass('sidebar-post');


})(window.jQuery);