import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>('https://fast-caverns-63520.herokuapp.com/api/user');
  }

}
