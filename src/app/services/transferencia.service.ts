import { Transferencia } from './../models/transferencia.models';
import { Observable } from 'rxjs';
import { Jason } from './../API/Api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  listaTransferencia: any[];

  constructor(private http: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(`${Jason}`);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);

    return this.http.post<Transferencia>(`${Jason}`, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
