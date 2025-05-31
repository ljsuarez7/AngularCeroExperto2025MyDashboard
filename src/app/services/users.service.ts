import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req-res.interface';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //el # es para hacer la propiedad privada, se podria poner private, pero eso solo es para ts, en js se pone #. Investigar si esto sigue siendo así ya que los videos son de hace 2 años
  #state = signal<State>({
    loading: true,
    users: []
  });

  constructor() {

    console.log('Cargando data');


  }

}
