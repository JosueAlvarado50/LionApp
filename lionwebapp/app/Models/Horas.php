<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class horas extends Model
{
    use HasFactory;
    protected $fillable = ['horas', 'status'];
}
