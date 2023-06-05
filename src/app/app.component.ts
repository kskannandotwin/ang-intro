import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userSerial: string | undefined;
  userName: string | undefined;
  userEmail: string | undefined;
  userAddress: string | undefined;
  userAction: string | undefined;

  user: any = {
    serial: '',
    name: '',
    email: '',
    address: '',
    action: ''
  };

  submit() {
    this.userSerial = this.user.serial;
    this.userName = this.user.name;
    this.userEmail = this.user.email;
    this.userAddress = this.user.address;
    this.userAction = this.user.action;
  }
}
