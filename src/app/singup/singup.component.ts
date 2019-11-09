 import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';
 import {SignUpInfo} from '../AuthService/signup-info';
 import {AuthService} from '../AuthService/auth.service';
 import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 @Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  hide = true;
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = true;
  errorMessage = '';
  successMessage: string;
  loading = false;

  regForm: FormGroup;
  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConf: ['',[Validators.required, Validators.minLength(6)]],
      email: ['',[Validators.required, Validators.email]]
    });
  }
onSubmit() {
    if(!this.regForm.valid || this.regForm.get('password').value !== this.regForm.get('passwordConf').value){
      alert('invalid data');
      return;
    }
    this.loading = true;
    this.authService.doRegister(this.regForm.value)
      .then(res => {
        console.log('Your account has been created')
        this.isSignedUp = true;
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        document.getElementById('singupup').style.display = 'none';
        alert("Successfully registered");
        this.loading = false;
        this.regForm.reset();
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.isSignedUp = false;
        this.errorMessage = err.message;
        alert(err.message);
        this.loading = false;
      });
    // console.log(this.form);

}

}
