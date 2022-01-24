<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CanalPostRequest extends FormRequest
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
            // add validations to request
            'name'=>'required|unique:canals|between:2,100',
            'number'=>'required|numeric|min:1'
        ];
    }
}
