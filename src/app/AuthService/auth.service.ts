import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userid: string;
  public role: any[];
  public authority: any[];

  user: Observable<firebase.User>;


  // we create 'db' variabe in this fuction for acces firebase database
  constructor( public db: AngularFirestore) {

  }
  //register form details go to database in this funtion
  //when you sign up user table also create using statement 2
  doRegister(value) {

   return new Promise<any>((resolve, reject) => {

      // the creteuserfun... it is firebase library function we imported
      //it is create a account statement 1
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          this.userid = res.user.uid;


          // statement 2
          return this.db.collection('user').doc(res.user.uid).set({
            firstname: '',
            lastname: '',
            email: res.user.email,
            username: value.username,
            role: ['user'],
            // comments: []
          }).then(val => {
            // alert("Registered successfully");
            resolve('done');
          });
        }, err => reject(err));
   });

  }


  // get user profile details
  getprofiledetails(id) {
    //id pass by parameter
    return this.db.collection('user').doc(id).snapshotChanges();
  }


updateProfile(profile,id,email){

  //  it is like signup statement 2
  //here we input value
  return this.db.collection('user').doc(id).set({
    firstname: profile.firstname,
    lastname: profile.lastname, 
    email: profile.email,
    dob: profile.dob,
    gender: profile.gender,
    role: ['user'],

  });
}


}
