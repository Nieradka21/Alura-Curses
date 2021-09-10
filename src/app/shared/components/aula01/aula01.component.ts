import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula01',
  templateUrl: './aula01.component.html',
  styleUrls: ['./aula01.component.scss'],
})
export class Aula01Component {
  title = 'a11y-p1';
  public form: FormGroup = null;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: [
        {
          value: 'no',
          disabled: false,
        },
      ],
    });
  }

  public submit(): void {
    this.form.get('yesNoAnswer').disable();
    console.log(this.form.value);
  }
}
