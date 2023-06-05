import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string | undefined;
  email: string | undefined;
  address: string | undefined;

  userArray: Array<any> = [];

  onClick() {
    this.userArray.push({
      'name': this.name,
      'email': this.email,
      'address': this.address
    });

    console.log(this.userArray);    
  }

  onDelete(index: number) {
    this.userArray.splice(index, 1);
  }
}
