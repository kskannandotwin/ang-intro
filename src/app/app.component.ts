import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainTitle = 'ang-intro';

  postTitle: string = '';
  postDetail: string = '';
  imgDetail: string = '';
  // https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg
  linkDetail: string = '';
  isInput: boolean = false;
  isChecked: boolean = false;

  onKeyup($event: any) {    
    this.isInput = true;
  }

}
