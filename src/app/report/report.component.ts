import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
arr:any=[];
act=true;
  upload: any;
  ext: string;
  name: any;
  constructor(public tst:Test11Service ) {
    this.tst.loadr=true;
    this.tst.repfind(this.tst.get_email()).subscribe((res)=>{
// this.arr=res;
console.log(res);
for(let i=0;i<res['length'];i++){
  // this.arr.push(res[i]);
  // console.log(this.arr);
    // this.tst.client_find1(this.arr[i].Username).subscribe((res1)=>{
// console.log(res1);
this.arr.push(res[i]);
          // this.arr2[i]['style']='none';
          this.arr[i]['style1']='none';
// this.arr2=res1;
console.log(this.arr);
}
    });
    this.tst.loadr=false;
   }
rep(a){
  if(a.style1=="none"){
    a.style1="block";
    this.tst.act=false;
    console.log(this.arr[0].Name);
     this.tst.show(this.arr[0].Name,this.arr[0].Extension).subscribe((res)=>{
      
      this.upload=res['image'];
      this.upload='data:image/'+this.arr[0].Extension+';base64,'+this.upload;
      // this.upload=this.sanitizer.bypassSecurityTrustStyle(this.upload);
      console.log(this.upload);
    });
  }
else{
  a.style1="none";
  this.tst.act=true;
}
}
  ngOnInit() {
  }

}
