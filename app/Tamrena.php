<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tamrena extends Model
{
    protected $fillable = ['name', 'stars', 'description'];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function category()
    {
        return $this->hasOne('App\Category', 'category_id');
    }

    public function rounds()
    {
        return $this->hasMany('App\Round');
    }
}
