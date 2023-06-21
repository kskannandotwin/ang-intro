import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { noSpaceValidator } from './validators/nospace.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        noSpaceValidator.noSpaceValidations
      ]],

      password: ['', Validators.required]
    });
  }

  get fc() {
    return this.form.controls;
  }

}
