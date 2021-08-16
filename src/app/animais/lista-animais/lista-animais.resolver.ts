import { switchMap, take } from 'rxjs/operators';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { AnimaisService } from './../animais.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Animais } from '../animais';

@Injectable({
  providedIn: 'root',
})
export class ListaAnimaisResolver implements Resolve<Animais> {
  constructor(
    private service: AnimaisService,
    private userService: UsuarioService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animais> {
    return this.userService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.service.listaDoUsuario(userName);
      }),
      take(1)
    );
  }
}
