<?php


Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix'=> 'auth'], function(){
	Route::get('/car-list', [
		'as'=> 'auth_car_list',
		'uses'=> 'AuthController@auth_car_list'
	]);

	Route::get('/contact', [
		'as'=> 'auth_contact',
		'uses'=> 'AuthController@auth_contact'
	]);

	Route::get('/about', [
		'as'=> 'auth_about',
		'uses'=> 'AuthController@auth_about'
	]);

	Route::get('/account', [
		'as'=> 'auth_account',
		'uses'=> 'AuthController@auth_account'
	]);

	Route::post('/loginCheck', [
		'as'=> 'auth_logincheck',
		'uses'=> 'AuthController@auth_logincheck'
	]);

	Route::post('/registerCheck', [
		'as'=> 'auth_register',
		'uses'=> 'AuthController@auth_register'
	]);

});

Route::group(['prefix'=> 'user'], function(){

	Route::get('/reservation', [
		'as'=> 'user_reservation',
		'uses'=> 'UserController@user_reservation'
	]);

	Route::get('/activity-list', [
		'as'=> 'user_activity',
		'uses'=> 'UserController@user_activity'
	]);

	Route::get('/account-details', [
		'as'=> 'user_account',
		'uses'=> 'UserController@user_account'
	]);

	Route::get('/logout', [
		'as'=>'user_logout',
		'uses'=> 'UserController@user_logout'
	]);

});

Route::group(['prefix'=> 'admin'], function(){

	Route::get('/home', [
		'as'=> 'admin_home',
		'uses'=> 'AdminController@admin_home'
	]);

	Route::get('/logout', [
		'as'=> 'admin_logout',
		'uses'=> 'AdminController@admin_logout'
	]);

	Route::get('/cars', [
		'as'=> 'admin_cars',
		'uses'=> 'AdminController@admin_cars'
	]);

	Route::get('/reservation-list', [
		'as'=> 'admin_reservation',
		'uses'=> 'AdminController@admin_reservation'
	]);

	Route::get('/customer-list', [
		'as'=> 'admin_custoemr',
		'uses'=> 'AdminController@admin_custoemr'
	]);

	Route::get('/messages', [
		'as'=> 'admin_message',
		'uses'=> 'AdminController@admin_message'
	]);

	Route::get('/gwapoko2', [
		'as'=> 'gwapo2',
		'uses'=> 'AdminController@gwapo2'
	]);
});
