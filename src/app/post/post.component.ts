import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() fromParent: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();

  postParentMessage: string = 'Message coming from the post parent';

  childMessage: string = 'From Child Component';

  outputChildMessage: string = 'Message from child component via Output decorator';

  sendMessage() {
    console.log('Clicked');
    this.messageEvent.emit(this.outputChildMessage);
  }
}
