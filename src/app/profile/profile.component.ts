import { Component, OnInit } from '@angular/core';
import {AdsService} from '../Services/ads.service';
import {AuthService} from '../AuthService/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uid: any;
  email: any;
  ads: Array<any>;
  data: any;
  updateDetails: any = {};
  click: boolean;
  constructor(private  adsinfo: AdsService, private upprofile: AuthService) { }
  profileinfomation: any;
  profile: any;
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.profile.user.uid);
    this.uid = this.profile.user.uid;

    this.myadsList(this.profile.user.uid);
    this.getprofileinfo();
    // this.email = this.profile.user.email;

  }


    myadsList(Uid) {

    // console.log(this.adsinfo=this.lo.authority)
    this.adsinfo.viewByOwner(Uid).subscribe(data => {
      // this.article=art;
      this.ads = data;
      // console.log(data.map(
      //   da => {
      //     console.log(da.payload.doc.id);
        }
        );


    }
    deleteMyAd(value) {
  this.adsinfo.deleteByOwner(value);

  }

    getprofileinfo() {
    this.upprofile.getprofiledetails(this.profile.user.uid).subscribe(data => {
      console.log(data.payload.get('role') + 'from profile components');
      this.profileinfomation = data.payload.get('role');
      this.email = data.payload.get('email');
      console.log(this.email+"chage it is update or not");
    }, eroe => {

    });
  }

updateProfile() {

    this.upprofile.updateProfile(this.updateDetails, this.uid, this.email).then(res => {
      console.log('update success');
    }, error => {
      console.log('update ' + error);
    });
}

openPro() {
  this.click = true;
  console.log(this.click + 'this button work');
  document.getElementById('update').style.display = 'block';
}

closePro() {
  this.click = false;
  document.getElementById('update').style.display = 'none';
}

}
