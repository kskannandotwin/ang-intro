import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: any;

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      address: new FormControl()
    });
  }

  onSubmit(f: NgForm) {
    console.log(f);
    console.log(f.value);    
  }
  
  getValue(fullName: NgModel) {
    console.log(fullName);    
  }
}
