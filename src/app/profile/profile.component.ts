import { Component, OnInit } from '@angular/core';
import {AdsService} from '../Services/ads.service';
import {AuthService} from '../AuthService/auth.service';
import * as uuid from 'uuid'
import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase'

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
  reserve: any;
  myRes: any;

  postDetails: any = {
    condition:'',
    title:'',
    description:'',
    price: 0
  };
  sendsucces: boolean = false;
  img_url: any;
  id: any;

  AdsImage: File;
  image_name: string;
  myId = uuid.v4();
  client={
    email:'',
    firstname:'',
    lastname:'',
  };

  constructor(private  adsinfo: AdsService, private upprofile: AuthService,
    private adsservice: AdsService,private afStorage: AngularFireStorage) { }
  profileinfomation: any;
  profile: any;
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.profile.user.uid);
    this.uid = this.profile.user.uid;

    this.myadsList(this.profile.user.uid);
    this.reservedAds();
    this.getMyReserved();
    this.getprofileinfo();
    this.email = this.profile.user.email;
    this.updateDetails.email = this.profile.user.email

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


reservedAds(){
  this.adsinfo.GetReservedAds().subscribe(
    result=>{

      this.reserve = result
      // console.log(result.map(
      //     da => {
      //       console.log(da.payload.doc.data());
      //     }
      // )
      // )
    }
  )
}

getMyReserved(){

  this.adsinfo.GetMyReservedAds().subscribe(

    result=>{

      this.myRes= result
    }
  )
}


viewRec(cli_id){

    this.adsinfo.getClient(cli_id).subscribe(
      result=>{
        this.client.email = result.payload.get('email')
        this.client.firstname = result.payload.get('firstname')
        this.client.lastname = result.payload.get('lastname')
      }
    )
}





editMyAd(id){
  
  this.adsinfo.editAd(id).subscribe(
    data=>{
      this.id = data.payload.id
       this.postDetails.condition = data.payload.get('condition')
       this.postDetails.title = data.payload.get('title')
       this.postDetails.description = data.payload.get('description')
       this.postDetails.price = data.payload.get('price')
       this.img_url = data.payload.get('img_url')
       this.postDetails.Uid = data.payload.get('Uid')
       this.postDetails.adsImage = data.payload.get('adsImage')
       this.image_name = data.payload.get('adsImage')
       this.postDetails.approved = data.payload.get('approved')
       this.postDetails.owneremail = data.payload.get('owneremail')

    }
  )

}



  onFileChanged(event) {
    this.AdsImage = <File>event.target.files[0]
    this.image_name = this.myId + this.AdsImage.name

  }


onsubmit(value) {


  if(this.image_name == this.postDetails.adsImage){
    this.adsservice.userUpdateAds(this.postDetails,this.id, this.postDetails.adsImage, this.img_url)
  }else{
    this.afStorage.upload('/' + this.image_name, this.AdsImage).then(
      data=>{
        const storageRef = firebase.storage().ref().child('/'+this.image_name)

        storageRef.getDownloadURL().then(url => {
          console.log(this.id)
          this.adsservice.userUpdateAds(this.postDetails,this.id, this.image_name, url)
      }
    )
      })
    }

  }



}
