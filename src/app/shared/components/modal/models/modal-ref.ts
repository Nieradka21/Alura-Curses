import { ModalComponent } from './../modal.component';
import { ComponentRef } from '@angular/core';

export class ModalRef {
  constructor(private componenRef: ComponentRef<ModalComponent>) {}
  close() {
    console.log('close called');
    this.componenRef.destroy();
  }
}
