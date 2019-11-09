import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './AuthService/authentication.service';
import {Router} from '@angular/router';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  info: any;
  currentUser: User;
  role:any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit() {
    this.role = JSON.parse(localStorage.getItem('role'));
    console.log(this.role+"from app component");

  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }
}
