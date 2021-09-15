import { FocusBackModule } from './../../directives/focus-back/focus-back.module';
import { FocusTrapModule } from './../../directives/focus-trap/focus-trap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, FocusTrapModule, FocusBackModule],
  exports: [ModalComponent],
})
export class ModalModule {}
