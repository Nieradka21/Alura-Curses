import { AnimaisService } from './../animais.service';
import { Animal } from './../animais';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalID!: number;
  animal$!: Observable<Animal>;
  constructor(
    private animaisService: AnimaisService,
    private active: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalID = this.active.snapshot.params.animalID;
    this.animal$ = this.animaisService.buscaPorID(this.animalID);
  }

  curtir() {
    this.animaisService.curtir(this.animalID).subscribe((curtida) => {
      if (curtida) {
        this.animal$ = this.animaisService.buscaPorID(this.animalID);
      }
    });
  }

  excluir() {
    this.animaisService.excluiAnimal(this.animalID).subscribe(
      () => {
        this.router.navigate(['/animais/']);
      },
      (error) => console.log(error)
    );
  }
}
