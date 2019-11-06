import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class Test11Service {
activate=false;
activate1=true;
ctr1=1;
ctr=2;
loadr=false;
name;
act=true;
arr3:any=[];
  url="http://localhost:2001/";
  upload: any;
  constructor(public http:HttpClient) { }
patient_save(finame,laname,age,email,pass,gend,fname,add,dob,cont,state,status){
return this.http.post(this.url+"reg",
{"Firstname":finame,"Lastname":laname,"Age":age,"Email":email,"Password":pass,"Gender":gend,"Fathername":fname,"Address":add,"Dob":dob,"Contact":cont,"State":state,"Status":status});
}
diag_save(lname,email,pass,owner,address,rating,cont,status){
  return this.http.post(this.url+"dreg",
  {"Lab_name":lname,"Lab_usr":email,"Lab_pass":pass,"Owner":owner,"Address":address,"Rating":rating,"Contact":cont,"Status":status})
}
patient_find(a,b){
  console.log(a);
  return this.http.post(this.url+"find",{"Email":a,"Password":b});
}
diag_find(a,b){
  return this.http.post(this.url+"find2",{"Lab_usr":a,"Lab_pass":b});
}
patient_booking(usr,dte,labusr,lab,add){
  console.log(dte);
return this.http.post(this.url+"book",{"Username":usr,"Date":dte,"Lab_usr":labusr,"Lab":lab,"Address":add});
}
set_email(usr){
  localStorage.setItem('Email',usr);

  // console.log(localStorage.getItem('Email'));
}
get_email(){
  // console.log(localStorage.getItem('Email'));
  return localStorage.getItem('Email');
};
set_item(a){
  localStorage.setItem('loginas',a);
}
get_item(){
  return localStorage.getItem('loginas');
}
logout(){
  return localStorage.removeItem('Email');
 
}
tests(x,a,b,c,d){
  return this.http.post(this.url+"pti",{"Lab_usr":x, "Test_name":a,"Pre_test_info":b,"Report_delievery":c,"Price":d});
}
repfind(a){
  return this.http.post(this.url+"repfind",{"Email":a});
}
repfind1(a){
  console.log(a);
  return this.http.post(this.url+"repfind1",{"Lab_name":a});
}
patient_app(x){
  return this.http.post(this.url+"appoint",
  {"Username":x});
}
lab(){
  return this.http.get(this.url+"lab");
}
client_find(y){
return this.http.post(this.url+"cli",
{"Lab_usr":y});
}
client_find1(z){
  return this.http.post(this.url+"cli1",
  {"Email":z});
  }
  feed_save(a,b){
  return this.http.post(this.url+"feed",{"Lab_name":a,"Feed":b});
  }
  review(a){
   return this.http.post(this.url+"review",{"Lab_name":a});
  }
  ptis(a){
    return this.http.post(this.url+"ptis",{"Lab_usr":a});
  }

  search1(s1){
return this.http.post(this.url+"ss",{"Lab_name":s1})
  }
  search2(s2){
    return this.http.post(this.url+"ss",{"Lab_name":s2})
      }
      save_img(name,ext,imgUri){
        console.log("fsdfs");
       return this.http.post("http://localhost:2001/image",{"imagepath":name,'ext':ext, "image":imgUri});
     
      }
      save_img1(a,b,c,d){
        console.log("fsdfs");
       return this.http.post("http://localhost:2001/image1",{"Lab_name":a,"Email":b,"Name":c,"Extension":d});
      }
      save_img2(a,b,c,d,e){
        console.log("fsdfs");
       return this.http.post("http://localhost:2001/image2",{"Lab_name":a,"Email":b,"Name":c,"Extension":d,"Date":e});
      }
      show(img,ext){
        return this.http.post("http://localhost:2001/getimage",{"img":img,'ext':ext});
      }
      report(x,y){
        console.log(x.Email);
        return this.http.post(this.url+"re",{"Email":x.Email,"Complain":y});
      }
      report1(x,y){
        // console.log(x.Lab_usr);
        return this.http.post(this.url+"re2",{"Email":x.Lab_usr,"Complain":y});
      }
      ifind(a){
        console.log(a);
        return this.http.post(this.url+"ifi",{"Email":a});
      }
      getdate(a){
        return this.http.post(this.url+"date",{"Date":a});
      }
      edipro(email,finame,laname,age,gend,fname,add,dob,cont,state){
        console.log(email,finame,laname);
        return this.http.post(this.url+"edipro",
        {"Email":email,"Firstname":finame,"Lastname":laname,"Age":age,"Gender":gend,"Fathername":fname,"Address":add,"Dob":dob,"Contact":cont,"State":state});
      }
      edipro2(lusr,lname,owner,address,rating,cont){
        return this.http.post(this.url+"edipro2",
        {"Lab_usr":lusr,"Lab_name":lname,"Owner":owner,"Address":address,"Rating":rating,"Contact":cont})
      }
}
