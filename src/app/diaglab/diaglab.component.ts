import { Component, OnInit } from '@angular/core';
import { Test11Service } from '../test11.service';

@Component({
  selector: 'app-diaglab',
  templateUrl: './diaglab.component.html',
  styleUrls: ['./diaglab.component.css']
})
export class DiaglabComponent implements OnInit {
s1;
s2;
arr;
arr2;
arr3;
arr1;
  constructor(public tst:Test11Service) { }
search(){
this.tst.search1(this.s1).subscribe((res)=>{
console.log(res);
this.arr=res;
// console.log(this.arr[0].Lab_usr);
this.tst.ptis(this.arr[0].Lab_usr).subscribe((res1)=>{
  console.log(res1);
  this.arr3=res1;
  });
});
}
search1(){
this.tst.search2(this.s2).subscribe((res)=>{
  console.log(res);
  this.arr1=res;
  
  this.tst.ptis(this.arr1[0].Lab_usr).subscribe((res1)=>{
    console.log(res1);
    this.arr2=res1;
    });
  });
}
  ngOnInit() {
  }

}
