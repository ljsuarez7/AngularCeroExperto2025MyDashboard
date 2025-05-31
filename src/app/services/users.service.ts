import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UsersResponse } from '@interfaces/req-res.interface';
import { delay } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  //el # es para hacer la propiedad privada, se podria poner private, pero eso solo es para ts, en js se pone #. Investigar si esto sigue siendo así ya que los videos son de hace 2 años
  #state = signal<State>({
    loading: true,
    users: []
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {

    //Mirar de todo esto probar a hacerlo con la forma nueva de httpResource de angular 20
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "x-api-key": "reqres-free-v1"
    });

    this.http.get<UsersResponse>('https://reqres.in/api/users', {headers: httpHeaders})
      .pipe(delay(1500)) //Esto lo ponemos para simular que la petición tarde
      .subscribe (res => {
        this.#state.set({
          loading: false,
          users: res.data
        })
      });


  }

}
