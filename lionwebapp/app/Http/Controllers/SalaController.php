<?php

namespace App\Http\Controllers;

use App\Models\Sala;
use Illuminate\Http\Request;

/**
 * Class SalaController
 * @package App\Http\Controllers
 */
class SalaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $salas = Sala::paginate();

        return view('sala.index', compact('salas'))
            ->with('i', (request()->input('page', 1) - 1) * $salas->perPage());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $sala = new Sala();
        return view('sala.create', compact('sala'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(Sala::$rules);

        $sala = Sala::create($request->all());

        return redirect()->route('salas.index')
            ->with('success', 'Sala created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sala = Sala::find($id);

        return view('sala.show', compact('sala'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $sala = Sala::find($id);

        return view('sala.edit', compact('sala'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Sala $sala
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sala $sala)
    {
        request()->validate(Sala::$rules);

        $sala->update($request->all());

        return redirect()->route('salas.index')
            ->with('success', 'Sala updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $sala = Sala::find($id)->delete();

        return redirect()->route('salas.index')
            ->with('success', 'Sala deleted successfully');
    }
}
