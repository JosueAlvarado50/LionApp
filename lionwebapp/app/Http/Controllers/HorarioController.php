<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Horario;
use Illuminate\Http\Request;

class HorarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $horario = Horario::all();
        return $horario;
        }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    public function store(Request $request)
    {
        //
        $horario =  new Horario();
        $horario->hora_7 =1;
        $horario->hora_8 =1;
        $horario->hora_9 =1;
        $horario->hora_10 =1;
        $horario->hora_11 =1;
        $horario->hora_12 =1;
        $horario->hora_13 =1;
        $horario->hora_14 =1;
        $horario->hora_15 =1;
        $horario->save();
        
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
        $horario = Horario::find($id);
        return $horario;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
    }

    public function update(Request $request, $id)
    {
        //
        $horario= Horario::findOrFail($request->id);
        $horario->hora_7 =$request->hora_7;
        $horario->hora_8 =$request->hora_8;
        $horario->hora_9 =$request->hora_9;
        $horario->hora_10 =$request->hora_10;
        $horario->hora_11 =$request->hora_11;
        $horario->hora_12 =$request->hora_12;
        $horario->hora_13 =$request->hora_13;
        $horario->hora_14 =$request->hora_14;
        $horario->hora_15 =$request->hora_15;
        $horario->save();
        return $horario;
       
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
        $horario = Horario::find($id)->delete();
        return $horario;
    }
}
