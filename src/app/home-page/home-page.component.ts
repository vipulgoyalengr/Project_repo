import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public tt1:Test11Service,public router:Router) {
    this.tt1.loadr=true;
    if(this.tt1.get_email()){
      this.tt1.activate=true;
      this.router.navigate(["/but"]);
    }
    this.tt1.loadr=false;
   }

  ngOnInit() {
  }

}
