import {
  ModalService,
  ModalRef,
} from './shared/components/modal/service/modal.service';
import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;
  firstName = 'ivan';
  modalRef: ModalRef;
  constructor(private modalService: ModalService) {}

  show() {
    this.modalRef = this.modalService.open({
      TemplateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }
}
