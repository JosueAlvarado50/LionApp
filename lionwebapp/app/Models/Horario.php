<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Horario
 *
 * @property $id
 * @property $7
 * @property $8
 * @property $9
 * @property $10
 * @property $11
 * @property $12
 * @property $13
 * @property $14
 * @property $created_at
 * @property $updated_at
 *
 * @property Sala[] $salas
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Horario extends Model
{
    
    static $rules = [
		'7' => 'required',
		'8' => 'required',
		'9' => 'required',
		'10' => 'required',
		'11' => 'required',
		'12' => 'required',
		'13' => 'required',
		'14' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['7','8','9','10','11','12','13','14'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function salas()
    {
        return $this->hasMany('App\Models\Sala', 'horario_id', 'id');
    }
    

}
