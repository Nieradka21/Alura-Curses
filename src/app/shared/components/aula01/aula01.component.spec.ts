import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula01Component } from './aula01.component';

describe('Aula01Component', () => {
  let component: Aula01Component;
  let fixture: ComponentFixture<Aula01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aula01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
