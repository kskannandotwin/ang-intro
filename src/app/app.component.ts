import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ang-intro';
  parentMessage: string = 'Message changed';
  message: string | undefined;

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp);    
  }

  ngAfterViewInit() {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }
}
