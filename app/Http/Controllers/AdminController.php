<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
class AdminController extends Controller
{
    
    public function admin_home(){
    	return view('admin.home');
    }

    public function admin_logout(){
    	Auth::logout();
    	return redirect('/');
    }

    public function admin_cars(){
    	return view('admin.cars');
    }

    public function admin_reservation(){
    	return view('admin.reservation');
    }

    public function admin_custoemr(){
    	return view('admin.customer');
    }

    public function admin_message(){
        return view('admin.message');
    }
}
