@extends('layouts.app')

@section('template_title')
    {{ $sala->name ?? 'Show Sala' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show Sala</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('salas.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Nombre:</strong>
                            {{ $sala->nombre }}
                        </div>
                        <div class="form-group">
                            <strong>Autor:</strong>
                            {{ $sala->autor }}
                        </div>
                        <div class="form-group">
                            <strong>Horario Id:</strong>
                            {{ $sala->horario_id }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
