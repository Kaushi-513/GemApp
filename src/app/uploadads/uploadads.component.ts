import { Component, OnInit } from '@angular/core';
import {AdsService} from '../Services/ads.service';
import * as uuid from 'uuid'
import * as firebase from 'firebase'
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-uploadads',
  templateUrl: './uploadads.component.html',
  styleUrls: ['./uploadads.component.css']
})
export class UploadadsComponent implements OnInit {
  postDetails: any = {};
  uid: any;
  email:any;
  sendsucces = false;

  isAleart=true;
  AdsImage: File;
  image_name: string;
  myId = uuid.v4();

  constructor(private adsservice: AdsService,private afStorage: AngularFireStorage) { }
profile: any;
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.profile.user.uid);
    this.uid = this.profile.user.uid;
    this.email= this.profile.user.email;
  }


  onFileChanged(event) {
    this.AdsImage = <File>event.target.files[0]

  }


onsubmit(value) {


  this.image_name = this.myId + this.AdsImage.name


    this.afStorage.upload('/' + this.image_name, this.AdsImage).then(
      data=>{
        const storageRef = firebase.storage().ref().child('/'+this.image_name)

        storageRef.getDownloadURL().then(url => {
          console.log(url)
          this.adsservice.UserUploadAds(this.postDetails, this.uid, this.email, this.image_name, url).then(data => {
            this.sendsucces = true;
          }, error => {
            console.log(error);
          });
        })
      }
    )

//     this.adsservice.UserUploadAds(this.postDetails, this.uid,this.email).then(data => {
// this.sendsucces = true;
//     }, error => {
// console.log(error);
//   });
}

  closeAleart(){
    this.isAleart=false;
    window.location.reload();
  }
}
