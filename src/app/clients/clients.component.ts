import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
arr1:any=[];
arr2:any=[];
cmp;
  constructor(public test1:Test11Service) {
    this.test1.loadr=true;
//     this.test1.client_find(this.test1.get_email()).subscribe((res)=>{
// this.arr1=res;
//     })
//     // for(let i=0;i<this.arr1.length;i++)
//     this.test1.client_find1(this.arr1.Username).subscribe((res)=>{
//       this.arr2=res;
//     })
this.test1.client_find(this.test1.get_email()).subscribe((res)=>{
  // this.arr1=res;
  // console.log(res);
  
  for(let i=0;i<res['length'];i++){
    this.arr1.push(res[i]);
    this.test1.client_find1(this.arr1[i].Username).subscribe((res1)=>{
      // console.log(this.arr1[i]);
  // this.arr2=res1;
  // console.log(this.arr2);
  let tmp:any=res1;
  for(let i=0;i<tmp.length;i++){
    this.arr2.push(tmp[i]);
    this.arr2[i]['style1']='none';
  }

    });
  }
});
this.test1.loadr=false;
   }
report(a){
  if(a.style1=="none"){
    // console.log(this.style1="none");
    a.style1="block";
    // this.flag=1;
}
else{
  this.test1.report(a,this.cmp).subscribe((res)=>{
  });
}
}
  ngOnInit() {
  }

}
