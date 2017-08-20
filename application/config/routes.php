<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

Route::root ('main');

Route::get ('admin', 'admin/main@index');

Route::get ('/login', 'platform@login');
Route::get ('/logout', 'platform@logout');
Route::get ('/platform/index', 'platform@login');

Route::get ('/about', 'main@about');
Route::get ('/support', 'main@support');
Route::get ('/search', 'main@search');
Route::get ('/search/(:num)', 'main@search($1)');

Route::get ('/lang', 'main@lang(0)');
Route::get ('/lang/(:any)', 'main@lang($1)');

Route::get ('/news/(:num)', 'blogs@show($1)');
Route::get ('/products/(:num)/(:num)', 'products@index($1, $2)');
Route::get ('/product/(:num)', 'products@show($1)');

Route::resourcePagination (array ('news-list'), 'blogs');
Route::resourcePagination (array ('news_list'), 'blogs');
Route::resourcePagination (array ('products'), 'products');

Route::get ('/platform', 'platform@login');

Route::group ('admin', function () {
  Route::resourcePagination (array ('langs'), 'langs');

  Route::resourcePagination (array ('menus'), 'menus');
  Route::resourcePagination (array ('menu', 'menus'), 'menu_menus');
  Route::resourcePagination (array ('news-list'), 'blogs');
  Route::resourcePagination (array ('news_list'), 'blogs');
  Route::resourcePagination (array ('banners'), 'banners');
  Route::resourcePagination (array ('smbs'), 'smbs');
  Route::resourcePagination (array ('solutions'), 'solutions');

  Route::resourcePagination (array ('products'), 'products');
  Route::resourcePagination (array ('product', 'features'), 'product_features');
  Route::resourcePagination (array ('product', 'sources'), 'product_sources');
  Route::resourcePagination (array ('product', 'downloads'), 'product_downloads');
});