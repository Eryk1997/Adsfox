<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CanalController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/canals/percentages', [CanalController::class, 'percentage']);

// options 1 to routing
Route::get('/canals', [CanalController::class, 'index']);
Route::post('/canals', [CanalController::class, 'store']);
Route::get('canals/{id}', [CanalController::class, 'show']);
Route::put('canals/{id}', [CanalController::class, 'update']);
Route::delete('canals/{id}', [CanalController::class, 'destroy']);

// options 2 to routing
//Route::resource('/canals',CanalController::class);
