import { api } from './../../../api/api';
import { Comentarios, Comentario } from './comentarios';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  buscaComentario(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${api}/photos/${id}/comments`);
  }

  incluiComentario(id: number, commentText: string): Observable<Comentario> {
    return this.http.post<Comentario>(`${api}/photos/${id}/comments`, {
      commentText,
    });
  }
}
