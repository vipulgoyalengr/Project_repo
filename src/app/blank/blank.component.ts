import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ThrowStmt } from '@angular/compiler';
import { HttpClient } from 'selenium-webdriver/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
// style1="none";
app1;
img;
flag=0;
arr:any=[];
a;
i;
j;
k:any=[];
ctr=0;
name;
cmp;
app2;
  slashIndex: number;
  semiColonIndex: number;
  commaIndex: number;
  imgUri: any;
  ext: any;
  upload: any=[];
  constructor(public tst:Test11Service,public toastr:ToastrManager,public sanitizer:DomSanitizer) {
    this.tst.loadr=true;
    this.tst.lab()
    .subscribe((res)=>{
      console.log(res);
      let tmp:any=res;
        for(let i=0;i<tmp.length;i++){
          this.arr.push(tmp[i]);
          this.arr[i]['style']='none';
          this.arr[i]['style1']='none';
        
console.log(this.arr[i].Lab_usr);
// let u="hello";
// let v=u.slice(0,3);
console.log(i);
this.tst.ifind(this.arr[i].Lab_usr).subscribe((res)=>{
this.k=res;
console.log(this.k);
console.log(i);
console.log(this.k[0].Name);
this.tst.show(this.k[0].Name,this.k[0].Extension).subscribe((res)=>{
  console.log(res);
  this.arr[i]['upload']=res['image'];
  console.log(this.arr[i].upload);
  this.arr[i]['upload']='data:image/'+this.k[0].Extension+';base64,'+this.arr[i].upload;
  // this.upload=this.sanitizer.bypassSecurityTrustStyle(this.upload);
  console.log(this.arr[i].upload);
});
}
);

        }
      // this.j=0;
      this.tst.loadr=false;
// this.a=this.tst.get_email();
    })

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
   save(v){
    //  let ctr=0;
     console.log(this.img);
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
      this.name="image"+this.ctr;
      this.ctr++;
     this.tst.save_img(this.name,this.ext,this.imgUri).subscribe((res)=>{
      //  console.log(res);
     });
     this.tst.save_img2(v.Lab_name,this.tst.get_email(),this.name,this.ext,this.app1).subscribe((res)=>{
      //  console.log(res);
     });
     this.toastr.successToastr('Uploaded Successfully', 'Success!');
   }
   show(){
    // this.tst.show(this.name,this.ext).subscribe((res)=>{
      
    //   this.upload=res['image'];
    //   this.upload='data:image/'+this.ext+';base64,'+this.upload;
    //   // this.upload=this.sanitizer.bypassSecurityTrustStyle(this.upload);
    //   console.log(this.upload);
    // });
   
   }
   report(a){
    if(a.style1=="none"){
      // console.log(this.style1="none");
      a.style1="block";
      // this.flag=1;
  }
  else{
    // console.log(this.cmp);
    // console.log(a.Email);
    
    this.tst.report1(a,this.cmp).subscribe((res)=>{
    });
  }
  }
menu(z){
 
  // this.flag=0;
 
  
  if(!this.app1 || !this.app2){
    
      this.toastr.warningToastr('Enter All Fields', 'Alert!');

    }
   
    else{
      // alert("Appointment Booked");
      // this.toastr.warningToastr('Enter All Fields', 'Alert!');
      console.log("yo");
      this.tst.patient_booking(this.tst.get_email(),this.app1,z.Lab_usr,z.Lab_name,z.Address).subscribe((res)=>{
        console.log(res);
      });
      // console.log(this.a);
      // console.log(this.app1);
      // console.log(this.arr[0].Lab_usr);
      // console.log(this.arr[0].Lab_name);
      // console.log(this.arr[0].Address);
      this.toastr.successToastr('Appointment Booked', 'Success!');
    }
  
  // this.flag=1;
}
  ngOnInit() {
  }

}
