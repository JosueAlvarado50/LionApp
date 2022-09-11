<?php

namespace App\Http\Controllers;
use App\Models\Sala;
use Illuminate\Http\Request;

class SalaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $salas = Sala::all();
        return $salas;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $sala = new Sala();
        return $sala;
    }
    public function store(Request $request)
    {
        //
        $sala = new Sala();
        $sala->nombre =$request->nombre;
        $sala->autor=$request->autor;
        $sala->horario_id=$request->horario_id;
        $sala->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $sala = Sala::find($id);
        return $sala;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
    public function update(Request $request, Sala $sala)
    {
        //
       $sala = Sala::findOrFail($request->id);
       $sala->nombre=$request->nombre;
       $sala->autor=$request->autor;
       $sala->save();
       return $sala;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $sala = Sala::find($id)->delete();
        return $sala;
    }
}
