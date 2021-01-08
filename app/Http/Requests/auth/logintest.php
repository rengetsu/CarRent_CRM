<?php

namespace App\Http\Requests\auth;

use Illuminate\Foundation\Http\FormRequest;

class logintest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fname'=> 'required|max:12',
            'fname'=> 'required|max:12',
            'email'=> 'required|max:30|email',
            'username'=> 'required|max:15',
            'password'=> 'required|max:12',
            'repeat_password'=> 'required|same:password'
        ];
    }
}
