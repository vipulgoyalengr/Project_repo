import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
arr:any=[];
i;
j;
  constructor(public testt:Test11Service) { 
    // var a=localStorage.get()
    this.testt.loadr=true;
    console.log(this.testt.get_email());
    this.testt.patient_app(this.testt.get_email()).subscribe((res)=>{
      console.log(res);
      // this.arr=res;
      this.j=0;
      for(this.i=res['length']-1;this.i>=0;this.i--){
        // this.arr.push(res[this.i]);
        this.arr[this.j]=res[this.i];//above method can also be used
       this.j++;
      }
      // console.log(this.arr);
    });
    this.testt.loadr=false;
  }

  ngOnInit() {
  }

}
