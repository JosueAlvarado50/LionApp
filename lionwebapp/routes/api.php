<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Api\HorasController;
use App\http\Controllers\HorarioController;
use App\http\Controllers\SalaController;

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
Route::controller(HorarioController::class)->group(function () {
    Route::get('/horarios', 'index');//para traer todas las horas
    Route::post('/horario', 'store');//almacenar una hora
    Route::get('/horario/{id}', 'show');//traer una hora en especifico
    Route::put('/horario/{id}', 'update');
    Route::delete('/horario/{id}', 'destroy');
});
Route::controller(SalaController::class)->group(function () {
    Route::get('/salas', 'index');//para traer todas las horas
    Route::post('/sala', 'store');//almacenar una hora
    Route::get('/sala/{id}', 'show');//traer una hora en especifico
    Route::put('/sala/{id}', 'update');
    Route::delete('/sala/{id}', 'destroy');
});