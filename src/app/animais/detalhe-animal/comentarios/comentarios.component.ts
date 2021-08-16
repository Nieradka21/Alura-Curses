import { switchMap, tap } from 'rxjs/operators';
import { ComentariosService } from './comentarios.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comentarios } from './comentarios';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;
  constructor(private service: ComentariosService, private form: FormBuilder) {}

  ngOnInit(): void {
    this.comentarios$ = this.service.buscaComentario(this.id);
    this.comentarioForm = this.form.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  gravar() {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.service.incluiComentario(this.id, comentario).pipe(
      switchMap(() => this.service.buscaComentario(this.id)),
      tap(() => {
        this.comentarioForm.reset();
      })
    );
  }
}
