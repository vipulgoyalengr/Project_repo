import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
arr:any=[];
arr2:any=[];
arr3:any=[];
  upload: any;
  ext: string;
  constructor(public test1:Test11Service) {
    this.test1.loadr=true;
    
    this.test1.client_find(this.test1.get_email()).subscribe((res)=>{
      console.log(res);
      this.arr=res;
      
  for(let i=0;i<res['length'];i++){
    // this.arr.push(res[i]);
    // console.log(this.arr);
      this.test1.client_find1(this.arr[i].Username).subscribe((res1)=>{
console.log(res1);
this.arr2=res1;
this.arr2[i]['date']=this.arr[i].Date;
this.arr2[i]['style1']='none';
      });
      this.test1.repfind1(this.arr[i].Lab).subscribe((res)=>{
        console.log(res);
        this.test1.arr3=res;
        // this.arr3.push(res);
        console.log(res);
      });
  }
    });
    this.test1.loadr=false;
   }
   rep(a){
    if(a.style1=="none"){
      a.style1="block";
      this.test1.act=false;
      console.log(a.Email);
      
      console.log(this.test1.arr3);
       this.test1.show(this.test1.arr3[0].Name,this.test1.arr3[0].Extension).subscribe((res)=>{
        this.upload=res['image'];
        console.log(this.upload);
        this.upload='data:image/'+this.test1.arr3[0].Extension+';base64,'+this.upload;
        // this.upload=this.sanitizer.bypasSecurityTrustStyle(this.upload);
        console.log(this.upload);
      });
    
    }
  else{
    a.style1="none";
    this.test1.act=true;
  }
  }
  ngOnInit() {
  }

}
