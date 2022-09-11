<div class="box box-info padding-1">
    <div class="box-body">
        
        <div class="form-group">
            {{ Form::label('7') }}
            {{ Form::text('7', $horario->7, ['class' => 'form-control' . ($errors->has('7') ? ' is-invalid' : ''), 'placeholder' => '7']) }}
            {!! $errors->first('7', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('8') }}
            {{ Form::text('8', $horario->8, ['class' => 'form-control' . ($errors->has('8') ? ' is-invalid' : ''), 'placeholder' => '8']) }}
            {!! $errors->first('8', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('9') }}
            {{ Form::text('9', $horario->9, ['class' => 'form-control' . ($errors->has('9') ? ' is-invalid' : ''), 'placeholder' => '9']) }}
            {!! $errors->first('9', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('10') }}
            {{ Form::text('10', $horario->10, ['class' => 'form-control' . ($errors->has('10') ? ' is-invalid' : ''), 'placeholder' => '10']) }}
            {!! $errors->first('10', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('11') }}
            {{ Form::text('11', $horario->11, ['class' => 'form-control' . ($errors->has('11') ? ' is-invalid' : ''), 'placeholder' => '11']) }}
            {!! $errors->first('11', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('12') }}
            {{ Form::text('12', $horario->12, ['class' => 'form-control' . ($errors->has('12') ? ' is-invalid' : ''), 'placeholder' => '12']) }}
            {!! $errors->first('12', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('13') }}
            {{ Form::text('13', $horario->13, ['class' => 'form-control' . ($errors->has('13') ? ' is-invalid' : ''), 'placeholder' => '13']) }}
            {!! $errors->first('13', '<div class="invalid-feedback">:message</div>') !!}
        </div>
        <div class="form-group">
            {{ Form::label('14') }}
            {{ Form::text('14', $horario->14, ['class' => 'form-control' . ($errors->has('14') ? ' is-invalid' : ''), 'placeholder' => '14']) }}
            {!! $errors->first('14', '<div class="invalid-feedback">:message</div>') !!}
        </div>

    </div>
    <div class="box-footer mt20">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>