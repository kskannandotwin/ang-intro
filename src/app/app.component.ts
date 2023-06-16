import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: any;
  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern(this.emailRegex)
        Validators.email
      ]),
      address: new FormControl('', Validators.required)
    });
  }

  get Fullname() {
    return this.form.get('fullName');
  }

  get Email() {
    return this.form.get('email');
  }

  get Address() {
    return this.form.get('address');
  }

  onSubmit() {    
    console.log(this.form.value);
  }  
}
