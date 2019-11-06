import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-tstup',
  templateUrl: './tstup.component.html',
  styleUrls: ['./tstup.component.css']
})
export class TstupComponent implements OnInit {
name;
ptt;
red;
price;
  constructor(public tst:Test11Service,public toastr:ToastrManager) { }
save(){

  this.tst.tests(this.tst.get_email(), this.name,this.ptt,this.red,this.price).subscribe((res)=>{
    this.toastr.infoToastr('Saved successfully', 'Info');
  });
}
  ngOnInit() {
  }

}
