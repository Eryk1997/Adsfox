<?php
use App\Http\Controllers\CanalController;
use Illuminate\Support\Facades\Route;

Route::get('/canals/percentages', [CanalController::class, 'percentage']);

// options 1 to routing
Route::get('/canals', [CanalController::class, 'index']);
Route::post('/canals', [CanalController::class, 'store']);
Route::get('canals/{id}', [CanalController::class, 'show']);
Route::put('canals/{id}', [CanalController::class, 'update']);
Route::delete('canals/{id}', [CanalController::class, 'destroy']);

// options 2 to routing
//Route::resource('/canals',CanalController::class);
