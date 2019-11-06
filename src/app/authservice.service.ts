import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,Router,RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {Test11Service} from './test11.service';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
path:ActivatedRouteSnapshot[];
route:ActivatedRouteSnapshot;
  constructor(private router:Router,public service:Test11Service) { }
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | Promise<boolean>| boolean
{
  if(this.service.get_email()){
    return false;
    this.router.navigate(['/but']);
  }
  else{
    
    return true;
  }
}
}
