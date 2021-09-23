import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular testing';
  public likes = 0;

  // tslint:disable-next-line: typedef
  like() {
    this.likes++;
  }
}
