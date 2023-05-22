import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post: string = 'post works!';

  @Input() fromParent: string | undefined;

  postParentMessage: string = 'Message coming from the post parent';

  childMessage: string = 'From child component';
}
