import { Aula01Component } from './shared/components/aula01/aula01.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'modal',
    pathMatch: 'full',
  },
  {
    path: 'modal',
    component: ModalComponent,
  },
  {
    path: 'aula01',
    component: Aula01Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
