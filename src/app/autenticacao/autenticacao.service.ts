import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../api/api';
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private http: HttpClient) {}

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.http.post(api, {
      userName: usuario,
      password: senha,
    });
  }
}
