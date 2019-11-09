import { Component, OnInit } from '@angular/core';

import { AuthService } from '../AuthService/auth.service';
import { AuthLoginInfo } from '../AuthService/login-info';
import { ActivatedRoute, Router } from '@angular/router';
// import {RoleService} from '../Auth/role.service';
import { delay } from 'rxjs/operators';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../AuthService/authentication.service';
import { User } from '../model/user';
import { RoleService } from '../AuthService/role.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  email: string;

  hide = true;
  form: any = {};

  isLoginFailed = false;

  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  currentUser: User;
  data: any;

  profile: any;
  profileinfomation: any;



  // public currentUser: Observable<User>;
  constructor(public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private autho: RoleService,
    private authenticationService: AuthenticationService) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['home']);
    }

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);


  }








  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'home/products ';
  }
  // get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    console.log('summited work' + this.form.email, this.form.password);
    this.authenticationService.login(this.form.email, this.form.password).then(
      data => {
        document.getElementById('loginin').style.display = 'none';
        this.profile = JSON.parse(localStorage.getItem('currentUser'));
        this.getprofileinfo();


      },
      error => {
        this.error = error;
        this.loading = false;
        this.isLoginFailed = true;
        console.log(error);
      });

  }

  getprofileinfo() {
    this.authService.getprofiledetails(this.profile.user.uid).subscribe(data => {
      console.log(data.payload.get('role') + 'from profile information');
      this.profileinfomation = data.payload.get('role');

      localStorage.setItem('role', JSON.stringify(this.profileinfomation));
      // this.currentUserSubject.next(this.profileinfomation);


      if (this.profileinfomation == 'user') {
        this.texuser();
        this.refresh();
      } else {
        this.texadmin();
        this.refresh();
      }

    }, eroe => {

    });
  }

  refresh(): void {
    window.location.reload();
  }
  texadmin(): void {
    window.alert("Logged in as Admin");
  }
  texuser(): void {
    window.alert("Logged in as User");
  }



}
