import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-upreports',
  templateUrl: './upreports.component.html',
  styleUrls: ['./upreports.component.css']
})
export class UpreportsComponent implements OnInit {
arr:any=[];
arr2:any=[];
  img: any;
  slashIndex: number;
  semiColonIndex: number;
  commaIndex: number;
  imgUri: any;
  ext: any;
  name: string;
  ctr=0;
  up;
  constructor(public tst:Test11Service,public toastr:ToastrManager) { 
    this.tst.loadr=true;
  this.tst.client_find(this.tst.get_email()).subscribe((res)=>{
    console.log(res);
    this.arr=res;
    
for(let i=0;i<res['length'];i++){
  // this.arr.push(res[i]);
  // console.log(this.arr);
    this.tst.client_find1(this.arr[i].Username).subscribe((res1)=>{
console.log(res1);
this.arr2.push(res1[i]);
          this.arr2[i]['style']='none';
          this.arr2[i]['style1']='none';
          this.arr2[i]['date']=this.arr[i].Date;
          this.arr2[i]['email']=this.arr[i].Username;
          console.log(this.arr2[i].style1);
// this.arr2=res1;
    });
}
  });
  this.tst.loadr=false;
}
  uplimg(a){
    if(a.style1=="none"){
      // console.log(this.style1="none");
      a.style1="block";
      // this.flag=1;
  }
  else if(!this.up){
alert("Enter all Fields");
  }
  // console.log(this.img);
   else{
    for(let x=0;x<this.img.length;x++){
      if(this.img[x] === "/"){
        this.slashIndex=x;
       //  console.log(this.slashInd ex);
      }
      if(this.img[x] === ";"){
       this.semiColonIndex=x;
       // console.log(this.semiColonIndex);
     }
     if(this.img[x] === ","){
       this.commaIndex=x;
       // console.log(this.commaIndex);
       break;
     }
   }
     this.imgUri=this.img.substring(this.commaIndex+1);
     // console.log(this.imgUri);
     this.ext=this.img.substring(this.slashIndex+1,this.semiColonIndex);
     // console.log(this.ext);
     this.name="upreport"+this.tst.ctr1;
     this.tst.ctr1++;
    this.tst.save_img(this.name,this.ext,this.imgUri).subscribe((res)=>{
     //  console.log(res);
    });
    this.tst.save_img1(this.arr.Lab,a.Email,this.name,this.ext).subscribe((res)=>{
     //  console.log(res);
    });
    this.toastr.successToastr('Uploaded Successfully', 'Success!');
   }
  }
  preview(event){
    let FileInput = event.target;
    let file=event.target.files[0];
    if(FileInput && file){
      var reader =new FileReader();
      reader.readAsDataURL(file);
      reader.onload=(e:any)=>
      {
        this.img=e.target.result;
      }
    }
  }
  ngOnInit() {
  }

}
