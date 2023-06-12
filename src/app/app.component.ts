import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(f: NgForm) {
    console.log(f);
    console.log(f.value);    
  }
  
  getValue(fullName: NgModel) {
    console.log(fullName);    
  }
}
