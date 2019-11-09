import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../AuthService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(public db: AngularFirestore, private http: HttpClient, private auth: AuthService) { }

  UserUploadAds(value, uid, email, AdsImage, url) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('UserSendAds').add({
        owneremail: email,
        Uid: uid,
        condition: value.condition,
        title: value.title,
        description: value.description,
        price: value.price,
        adsImage: AdsImage,
        img_url:url,
        reserved: false,
        approved: false

      }).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }

  reserveAd(id) {
    const curr = JSON.parse(localStorage.getItem('currentUser'))
    console.log(id);
    this.db
      .collection("AproveAds")
      .doc(id)
      .set({ reserved: true, reservedBy: curr.user.uid }, { merge: true });
  }

  ViewAds() {
    // console.log("Document run");
    return this.db.collection('UserSendAds').snapshotChanges();


  }

  ViewaprovedAds() {
    // console.log("Document run");
    return this.db.collection('AproveAds').snapshotChanges();


  }

  viewByOwner() {
    return this.db.collection('UserSendAds').snapshotChanges();
  }

  deleteByOwner(id) {
    return this.db.collection('UserSendAds').doc(id).delete().then(
      data => {
        console.log('ads has been deleted');
      }, err => {
        console.log('ads hasnt been deleted' + err);
      }
    );
  }


  deleteByAdmin(id) {

    return this.db.collection('AproveAds').doc(id).delete().then(
      data => {
        console.log('ads has been deleted');
      }, err => {
        console.log('ads hasnt been deleted' + err);
      }
    );
  }


  // getoneAds(id) {
  //   console.log(id + 'this is ads servise got one ads');
  //   return this.db.collection('UserSendAds').doc(id).get().subscribe(data => {
  //     console.log(data.data() + ' data this is ads servise got one ads');
  //     this.deleteByOwner(id);
  //   });
  // }




  aprovetheAds(value,id) {
    return new Promise<any>((resolve, reject) => {
      console.log(value.condition + 'this in adservis');


      this.db
          .collection("UserSendAds")
          .doc(id)
          .set({ approved: true }, { merge: true });


      this.db.collection('AproveAds').add({

        condition: value.condition,
        title: value.title,
        description: value.description,
        price: value.price,
        owneremail: value.owneremail,
        img_url: value.img_url

      }).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }



}
