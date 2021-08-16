import { TokenService } from './../autenticacao/token.service';
import { api } from 'src/app/api/api';
import { Observable, of, throwError } from 'rxjs';
import { Animais, Animal } from './animais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo } from 'rxjs/operators';

const NOT_MODIFIELD = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    return this.http.get<Animais>(`${api}/${nomeDoUsuario}/photos`);
  }

  buscaPorID(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${api}/photos/${id}`);
  }

  excluiAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${api}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.http
      .post(`${api}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIELD ? of(false) : throwError(error);
        })
      );
  }

  upload(descricao: string, permiteComentario: boolean, arquivo: File) {
    const formData = new FormData();
    formData.append('description', descricao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.http.post(`${api}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
