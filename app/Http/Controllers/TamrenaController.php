<?php

namespace App\Http\Controllers;

use App\Tamrena;
use Illuminate\Http\Request;

class TamrenaController extends Controller
{
    public function index()
    {
        $tamrenas = Tamrena::with('user')->get();
        
        return response()->json($tamrenas);
    }

    public function delete($id) {

        $tamrena = Tamrena::find($id);
        $tamrena->delete();
        return response()->json('deleted successfully', 204);
    }
}
