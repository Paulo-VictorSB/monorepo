<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;

Route::get('/', function (){
    return redirect()->route('portifolio');
});

Route::prefix('/portifolio')->group(function (){
    Route::get('/', function(){
        return view('portifolio');
    })->name('portifolio');
});

Route::prefix('cinelove')->group(function () {
    Route::get('/', [MainController::class, 'home'])->name('home');

    Route::post('/filmes', [MainController::class, 'guardar_filme']);
    Route::post('/assistido', [MainController::class, 'marcar_assistido']);

    Route::get('/assistidos', [MainController::class, 'assistidos']);
    Route::get('/pendentes', [MainController::class, 'pendentes']);
});
