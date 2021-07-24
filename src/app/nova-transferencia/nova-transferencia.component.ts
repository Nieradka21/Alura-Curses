import { Transferencia } from './../models/transferencia.models';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number;
  destino: number;
  id: number | string;
  data: string;

  constructor(private service: TransferenciaService, private router: Router) {}

  @Output() aoTransferir = new EventEmitter<any>();

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferencia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      id: this.id,
      data: this.data,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (res) => {
        this.router.navigateByUrl('extrato');
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
