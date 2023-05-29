import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postTitle: string | undefined;
  postDetails: string | undefined;
  imageUrl: string | undefined;
  postUrl: string | undefined;
  addBackground: boolean | undefined;
}
