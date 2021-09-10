import { ModalModule } from './shared/components/modal/modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { DisableControlModule } from './shared/directives/disable-control/disable-control.module';
import { AppRoutingModule } from './app-routing.module';
import { Aula01Component } from './shared/components/aula01/aula01.component';

@NgModule({
  declarations: [AppComponent, Aula01Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule,
    ModalModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
