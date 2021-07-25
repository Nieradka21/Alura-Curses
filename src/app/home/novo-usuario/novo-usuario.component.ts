import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  constructor(private form: FormBuilder, private service: NovoUsuarioService) {}

  ngOnInit(): void {
    this.novoUsuario();
  }

  novoUsuario() {
    this.novoUsuarioForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.minLength(3), minusculoValidator]],
      passWord: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.service.cadastraNovoUsuario(novoUsuario).subscribe(
        () => {
          console.log(novoUsuario);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
