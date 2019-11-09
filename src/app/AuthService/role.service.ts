import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {AuthenticationService} from '../AuthService/authentication.service';
@Injectable({
  providedIn: 'root'
})


export class RoleService{
  public role:''
  public authority:any[];
  constructor(private http: HttpClient,public db: AngularFirestore,public authService: AuthenticationService) {

  }
  getrole(){
// console.log("in role sre"+this.authService.userid)
    // return this.db.collection('user').doc(this.authService.userid).snapshotChanges()
    // subscribe(data=>{
    //   console.log(data.payload.get("role"))
    //   this.role=data.payload.get("role")
    //   console.log('get role calling end role'+this.role)
    // })
  }
}
