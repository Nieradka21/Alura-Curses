import { fade } from './../../animations/fade';
import { Component, HostBinding, OnInit, TemplateRef } from '@angular/core';
import { ModalConfig } from './interfaces/modal-config';
import { ModalRef } from './models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {
  config: ModalConfig;
  @HostBinding('@fade') fade = true;
  public modalRef: ModalRef;
  constructor() {}

  ngOnInit(): void {}
}
