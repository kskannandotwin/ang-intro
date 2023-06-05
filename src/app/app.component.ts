import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Course';
  count: number = 285645;
  dcValue: number = 3.85674;
  price: number = 99.99;

  today: Date = new Date();

  postObj: object = {
    id: 1,
    postTitle: 'Post 1'
  }

  postArray: Array<string> = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5',
    'post 6'
  ];

  userdetails = {
    name: 'User 1',
    city: 'Newyork',
    countryCode: 'US'
  }

  dummyText: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam suscipit eum aperiam quisquam adipisci unde vitae cupiditate totam ipsam iure inventore quaerat expedita sit sunt reiciendis quos, ea autem sint.'
}
