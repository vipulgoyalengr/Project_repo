import { Component } from '@angular/core';
import {Test11Service} from './test11.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  varflag=0;
  n;
  constructor(public tt:Test11Service){
    var d = new Date();
    this.n = d.getDate();
    if(this.tt.get_email()){
    this.tt.activate=true;
    // this.tt.activate1=true;
    
    }
    else {
      this.tt.activate=false;
      // this.tt.activate1=false;
    
    }
    this.tt.getdate(this.n).subscribe((res)=>{
console.log(res);
    });
  }
  // ngDoCheck(){
  //   if(this.tt.get_email()){
  //     this.varflag=1;
  //     }
  //       else {
  //     this.varflag=0;
  //   }
  // }
  // title = 'user';
}
