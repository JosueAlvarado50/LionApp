<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Sala
 *
 * @property $id
 * @property $nombre
 * @property $autor
 * @property $horario_id
 * @property $created_at
 * @property $updated_at
 *
 * @property Horario $horario
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Sala extends Model
{
    
    static $rules = [
		'nombre' => 'required',
		'autor' => 'required',
		'horario_id' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['nombre','autor','horario_id'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function horario()
    {
        return $this->hasOne('App\Models\Horario', 'id', 'horario_id');
    }
    

}
