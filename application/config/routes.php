<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

Route::root ('main');

Route::get ('admin', 'admin/main@index');

Route::get ('/login', 'platform@login');
Route::get ('/logout', 'platform@logout');
Route::get ('/platform/index', 'platform@login');
Route::get ('/about', 'main@about');
Route::get ('/search', 'main@search');
Route::resourcePagination (array ('blogs'), 'blogs');

Route::get ('/platform', 'platform@login');

Route::group ('admin', function () {
  Route::resourcePagination (array ('langs'), 'langs');

  Route::resourcePagination (array ('menus'), 'menus');
  Route::resourcePagination (array ('menu', 'menus'), 'menu_menus');
  Route::resourcePagination (array ('blogs'), 'blogs');
  Route::resourcePagination (array ('banners'), 'banners');
  Route::resourcePagination (array ('products'), 'products');
  Route::resourcePagination (array ('product', 'images'), 'product_images');
  Route::resourcePagination (array ('product', 'features'), 'product_features');
  Route::resourcePagination (array ('product', 'sources'), 'product_sources');
  Route::resourcePagination (array ('product', 'downloads'), 'product_downloads');
});