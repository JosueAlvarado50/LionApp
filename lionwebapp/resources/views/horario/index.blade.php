@extends('layouts.app')

@section('template_title')
    Horario
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Horario') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('horarios.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
                                  {{ __('Create New') }}
                                </a>
                              </div>
                        </div>
                    </div>
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
										<th>7</th>
										<th>8</th>
										<th>9</th>
										<th>10</th>
										<th>11</th>
										<th>12</th>
										<th>13</th>
										<th>14</th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($horarios as $horario)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
											<td>{{ $horario->7 }}</td>
											<td>{{ $horario->8 }}</td>
											<td>{{ $horario->9 }}</td>
											<td>{{ $horario->10 }}</td>
											<td>{{ $horario->11 }}</td>
											<td>{{ $horario->12 }}</td>
											<td>{{ $horario->13 }}</td>
											<td>{{ $horario->14 }}</td>

                                            <td>
                                                <form action="{{ route('horarios.destroy',$horario->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('horarios.show',$horario->id) }}"><i class="fa fa-fw fa-eye"></i> Show</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('horarios.edit',$horario->id) }}"><i class="fa fa-fw fa-edit"></i> Edit</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i> Delete</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {!! $horarios->links() !!}
            </div>
        </div>
    </div>
@endsection
