<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
class UserController extends Controller
{
    
    public function user_reservation(){
    	return view('user.reservation');
    }

    public function user_activity(){
    	return view('user.activity');
    }

    public function user_logout(){
    	Auth::logout();
    	return redirect('/');
    }

    public function user_account(){
        return view('user.account');
    }
}
