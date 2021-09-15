import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from './shared/components/modal/service/modal.service';
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ModalRef } from './shared/components/modal/models/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;
  firstName = 'ivan';
  modalRef: ModalRef;
  form: FormGroup;
  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['ivan', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  show() {
    this.modalRef = this.modalService.open({
      TemplateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.modalRef.close();
    this.form.reset();
  }
}
