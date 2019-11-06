import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
import { Router } from '@angular/router';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
usr;
pass;
arr:any;

// flag;
  
login(){
  if(!this.usr||!this.pass){
    this.toast.warningToastr('Empty Fields', 'Alert!');
  }
  else{
    // console.log("dfsdfs");
  this.test1.patient_find(this.usr,this.pass)
  .subscribe((res)=>{
    console.log(res);
  this.arr=res;
  },(err)=>{
if(err.status==200){
  // alert("login successful");
  // this.flag=1;
 
  this.test1.activate1=true;
this.test1.set_email(this.usr);
this.test1.set_item("user");
this.toast.successToastr("Loggin successfull...","Logged In");
this.test1.activate=true;
this.router.navigate(['/but']);
// this.test1.get_email();

}
else if(err.status==201){
  // alert("Password not found");
  this.toast.errorToastr('Password Not Found', 'Oops!');
}
else if(err.status==202){
  // alert("Incorrect username and password");
  this.toast.errorToastr('Incorrect Username And Password', 'Oops!');
}
  });}
}
constructor(public test1:Test11Service,private router:Router,public toast:ToastrManager) { 
  
 

    }
  ngOnInit() {
    if(this.test1.get_email()){
      this.router.navigate(['/but']);
    }
  }

}
