<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Round extends Model
{
    protected $fillable = ['name', 'reps', 'rest'];

    public function tamrena()
    {
        return $this->belongsTo('App\Tamrena', 'tamrena_id');
    }
}
