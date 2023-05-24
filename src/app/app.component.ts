import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ang-intro';
  parentMessage: string = 'Message changed';
  // message: string | undefined;
  message: string = 'Message from typescript component file';
  fromChildOutput: string | undefined;

  @ViewChild(PostComponent) childComp: any;

  // if you didn't use ChangeDetectorRef, face error in console.
  constructor(private cdr: ChangeDetectorRef) {
    // console.log(this.childComp);
  }

  ngAfterViewInit() {
    // console.log(this.childComp);
    // console.log(this.childComp.childMessage);
    
    this.message = this.childComp.childMessage;
    this.cdr.detectChanges();
  }

  receiveMessage($event: any) {
    // console.log($event);
    this.fromChildOutput = $event;    
  }
}
