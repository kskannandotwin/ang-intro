import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-intro';
  bool: boolean = true;
  userName: string | undefined;

  buttonClick() {
    console.log('Button click event worked');
  }

  onKeyup() {
    console.log(this.userName);
  }
}
