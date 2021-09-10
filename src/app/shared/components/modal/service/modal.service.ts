import { BodyInjectorService } from './../../../services/body-injector';
import { ModalComponent } from './../modal.component';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;
  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    this.componentFactory =
      componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  open(config: ModalConfig) {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    console.log('open called');
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}

export class ModalRef {
  constructor(private componenRef: ComponentRef<ModalComponent>) {}
  close() {
    console.log('close called');
    this.componenRef.destroy();
  }
}
