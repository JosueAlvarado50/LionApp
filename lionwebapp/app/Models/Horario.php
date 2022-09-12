<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class horario extends Model
{
    use HasFactory;
    protected $fillable = ['hora_7', 'hora_8', 'hora_9','hora_10','hora_11','hora_12','hora_13','hora_14','hora_15'];
}
