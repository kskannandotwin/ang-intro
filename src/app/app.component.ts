import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-intro';
  bool: boolean = true;

  buttonClick() {
    console.log('Button click event worked');
  }

  onKeyup(username: any) {
    console.log(username);
  }
}
