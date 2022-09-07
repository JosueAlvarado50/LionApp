<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Api\HorasController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::controller(HorasController::class)->group(function () {
    Route::get('/horas', 'index');//para traer todas las horas
    Route::post('/hora', 'store');//almacenar una hora
    Route::get('/hora/{id}', 'show');//traer una hora en especifico
    Route::put('/hora/{id}', 'update');
    Route::delete('/hora/{id}', 'destroy');
});