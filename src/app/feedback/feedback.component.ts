import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
labname;
feed;
arr:any;
  constructor(public test:Test11Service) { }
sub(){
  this.test.feed_save(this.labname,this.feed).subscribe((res)=>{
this.arr=res;
  });
}
  ngOnInit() {
  }

}
