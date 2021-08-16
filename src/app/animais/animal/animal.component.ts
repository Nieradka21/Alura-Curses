import { Component, Input, OnInit } from '@angular/core';
import { api } from 'src/app/api/api';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  private urlOriginal = '';
  @Input() descricao = '';
  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${api}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }
  constructor() {}

  ngOnInit(): void {}
}
