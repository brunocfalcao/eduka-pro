<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Nothing to default here, unless something specific you want to test.
| The Eduka route files are loaded dynamically by the framework.
|
*/

use Eduka\Cube\Models\Episode;
use Eduka\Nereus\Http\Controllers\ChapterPageController;
use Eduka\Nereus\Http\Controllers\CoursePageController;
use Eduka\Nereus\Http\Controllers\EpisodePageController;
use Illuminate\Support\Facades\Route;

Route::get(
    'courses/{course:canonical}',
    [CoursePageController::class, 'index']
)->name('course.view');

Route::get(
    'chapters/{chapter:uuid}',
    [ChapterPageController::class, 'index']
)
    ->name('chapter.view');

Route::get(
    'episodes/{episode:uuid}',
    [EpisodePageController::class, 'index']
)
    //->middleware(CanSeeEpisode::class)
    ->name('episode.play');

//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
