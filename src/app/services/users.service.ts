import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-res.interface';
import { delay, map, Observable } from 'rxjs';

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

  //Mirar de todo esto probar a hacerlo con la forma nueva de httpResource de angular 20
  httpHeaders: HttpHeaders = new HttpHeaders({
    "x-api-key": "reqres-free-v1"
  });

  constructor() {


    this.http.get<UsersResponse>('https://reqres.in/api/users', {headers: this.httpHeaders})
      .pipe(delay(1500)) //Esto lo ponemos para simular que la petición tarde
      .subscribe (res => {
        this.#state.set({
          loading: false,
          users: res.data
        })
      });

  }

  getUserById(id: string): Observable<User> {

    //Mirar de todo esto probar a hacerlo con la forma nueva de httpResource de angular 20

    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`, {headers: this.httpHeaders})
      .pipe(
        delay(1500), //Esto lo ponemos para simular que la petición tarde
        map(resp => resp.data)
      )

  }

}
