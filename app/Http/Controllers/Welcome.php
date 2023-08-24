<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Welcome extends Controller
{
    public function index()
    {
        $props['profileImageUrl'] = Storage::url("images/profile.jpg");
        return Inertia::render('Welcome', $props);
    }
}
