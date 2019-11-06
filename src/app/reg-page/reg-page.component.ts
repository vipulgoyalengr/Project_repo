import { Component, OnInit } from '@angular/core';
import {Test11Service} from '../test11.service';
import { empty } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent implements OnInit {
finame;
laname;
age;
email;
email1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
pass;
cpass;
gend;
fname;
cont1=/^\d{10}$/;
cont;
add;
dob;
state;
passflag;
ageflag;
  constructor(public test:Test11Service,public toastr:ToastrManager,public route:Router) { 
     
  }
reg(){
 let done1 =this.cont1.test(this.cont);
let done=this.email1.test(this.email);
if(this.finame==empty||this.laname==empty||this.age==empty||this.email==empty||this.pass==empty||this.gend==empty||this.fname==empty||this.add==empty||this.dob==empty||this.cont==empty||this.state==empty){
  // alert("Please fill all the fields");
  this.toastr.warningToastr('Please fill all the fields', 'Alert!');
}
else if(!done||!done1){
  if(!done1){
    // alert("Enter valid contact");
    this.toastr.warningToastr('Enter Valid Contact', 'Alert!');
  
  }
  else if(!done && !done1){
    // alert("enter valid details");
    this.toastr.warningToastr('Enter Valid Details ', 'Alert!');
  }
  else {
    // alert("enter valid email");
    this.toastr.warningToastr('Enter Valid Email', 'Alert!');
  }
}
else if(this.pass!=this.cpass||this.pass.length<8||this.age<0){
  if(this.pass!=this.cpass){
  // alert("Password doesn't match");
  this.toastr.errorToastr('Password dont match', 'Oops!');
  }
  if(this.pass.length<8){
    this.passflag=1;
  }
  if(this.age<0){
   this.ageflag=1;
  }
}
else{
  // alert("registration successful");
  this.toastr.successToastr('Registration Successful', 'Success!');
this.test.patient_save(this.finame,this.laname,this.age,this.email,this.pass,this.gend,this.fname,this.add,this.dob,this.cont,this.state,"Activate")
.subscribe((res)=>{
  // console.log(res);
})
this.route.navigate(['/login'])
}
}
  ngOnInit() {
  }

}
