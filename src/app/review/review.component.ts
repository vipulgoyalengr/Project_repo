import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
arr:any;
  constructor(public test:Test11Service) { 
    this.test.loadr=true;
    this.test.review(this.test.get_email()).subscribe((res)=>{
this.arr=res;
    });
    this.test.loadr=false;
  }

  ngOnInit() {
  }

}
