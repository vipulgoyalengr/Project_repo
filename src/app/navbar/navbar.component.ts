import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { getLocaleTimeFormat } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  a;
  b;
  c;
  d;
  style1="none";
menu(){
  this.a="Edit Profile";
  // this.b="Feedback"
this.c="Sign Out";
if(this.style1=="block"){
this.style1="none";
}
else{
  this.style1="block"
}
}
logout(){
this.test2.logout();
// this.router.navigate(['/ap']);
this.test2.activate=false;
    this.router.navigate(['/home']);
    this.toast.successToastr("Logged Out successfull...","Logged Out");
    
    
  }

  constructor(public test2:Test11Service,private router:Router ,public toast:ToastrManager) {
  // getitem from localstorage of save as
  // this.test2.loadr=true;
  this.test2.loadr=true;
  let logincheck=localStorage.getItem('loginas');
  console.log(logincheck);
  if(logincheck=='user'){
    this.test2.activate1=true;
  }else{
    this.test2.activate1=false;
  }
  // this.test2.loadr=false;
  console.log(this.test2.activate1);
  this.test2.loadr=false;
  }
 
  ngOnInit() {

  }

}
