import { TokenService } from './../autenticacao/token.service';
import { api } from 'src/app/api/api';
import { Observable } from 'rxjs';
import { Animais } from './animais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient, private TokenService: TokenService) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.TokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animais>(`${api}/${nomeDoUsuario}/photos`, {
      headers: headers,
    });
  }
}
