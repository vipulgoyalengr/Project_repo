import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page2',
  templateUrl: './login-page2.component.html',
  styleUrls: ['./login-page2.component.css']
})
export class LoginPage2Component implements OnInit {
usr;
pass;
arr:any;
login(){
  this.test1.diag_find(this.usr,this.pass)
  .subscribe((res)=>{
    console.log(res);
  this.arr=res;
  },(err)=>{
if(err.status==200){
  // alert("login successful");
  // this.flag=1;
  this.test1.activate1=false;
this.test1.set_email(this.usr);
this.test1.set_item("lab");
this.toast.successToastr("Loggin successfull...","Logged In");
this.test1.activate=true;
this.router.navigate(['/client']);
// this.test1.get_email();

}
else if(err.status==201){
  // alert("Password not found");
  this.toast.errorToastr('Password dont match.', 'Oops!');
}
else if(err.status==202){
  // alert("Incorrect username and password");
  this.toast.errorToastr('Incorrect Email and Password.', 'Oops!');
}
else if(err.status==203){
  // alert("Incorrect username and password");
  // this.toast.errorToastr('Incorrect Email and Password.', 'Oops!');
  this.toast.infoToastr('Your Account is Deactivated', 'Info');

}
  });
}
  constructor(public test1:Test11Service,private router:Router,public toast:ToastrManager) { }

  ngOnInit() {
    if(this.test1.get_email() && this.test1.get_item()){
      this.router.navigate(['/client']);
    }
  }

}
