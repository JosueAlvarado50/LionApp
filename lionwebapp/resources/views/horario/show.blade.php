@extends('layouts.app')

@section('template_title')
    {{ $horario->name ?? 'Show Horario' }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">Show Horario</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('horarios.index') }}"> Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>7:</strong>
                            {{ $horario->7 }}
                        </div>
                        <div class="form-group">
                            <strong>8:</strong>
                            {{ $horario->8 }}
                        </div>
                        <div class="form-group">
                            <strong>9:</strong>
                            {{ $horario->9 }}
                        </div>
                        <div class="form-group">
                            <strong>10:</strong>
                            {{ $horario->10 }}
                        </div>
                        <div class="form-group">
                            <strong>11:</strong>
                            {{ $horario->11 }}
                        </div>
                        <div class="form-group">
                            <strong>12:</strong>
                            {{ $horario->12 }}
                        </div>
                        <div class="form-group">
                            <strong>13:</strong>
                            {{ $horario->13 }}
                        </div>
                        <div class="form-group">
                            <strong>14:</strong>
                            {{ $horario->14 }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
