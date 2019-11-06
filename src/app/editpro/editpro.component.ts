import { Component, OnInit } from '@angular/core';
import {Test11Service} from '../test11.service';
import { empty } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {
finame;
laname;
age;
// email;
// email1=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// pass;
// cpass;
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
// let done=this.email1.test(this.email);
if(this.finame==empty||this.laname==empty||this.age==empty||this.gend==empty||this.fname==empty||this.add==empty||this.dob==empty||this.cont==empty||this.state==empty){
  // alert("Please fill all the fields");
  this.toastr.warningToastr('Please fill all the fields', 'Alert!');
}
else if(!done1){
  if(!done1){
    // alert("Enter valid contact");
    this.toastr.warningToastr('Enter Valid Contact', 'Alert!');
  
  }
  
}
else if(this.age<0){
  if(this.age<0){
  //  this.ageflag=1;
  this.toastr.warningToastr('Enter Valid Age', 'Alert!');
  }
}
else{
  // alert("registration successful");

this.test.edipro(this.test.get_email(),this.finame,this.laname,this.age,this.gend,this.fname,this.add,this.dob,this.cont,this.state)
.subscribe((res)=>{
  // console.log(res);  
  this.toastr.successToastr('Updation Successful', 'Success!');
})
// this.route.navigate(['/login'])
}
}
  ngOnInit() {
  }

}
