import { Component, OnInit } from '@angular/core';
import {AdsService} from '../Services/ads.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-aprove-ads',
  templateUrl: './aprove-ads.component.html',
  styleUrls: ['./aprove-ads.component.css']
})
export class AproveADSComponent implements OnInit {
  ADdata: any = {};
  issendTOAprove: boolean;
  ads: Array<any>;
  aprove='this is aproved ad';
  constructor(private adsservices: AdsService, public db: AngularFirestore) { }

  ngOnInit() {

    this.adsList();
  }
  adsList() {
    this.adsservices.AdminViewAds().subscribe(data => {
      this.ads = data;
    });
  }

  aprovethis(adsId) {
    // console.log(adsId)
    this.getad(adsId);
  }

  getad(id) {
    // this.adsservices.getoneAds(id);
    return this.db.collection('UserSendAds').doc(id).get().subscribe(data=>{
      // console.log(data.data()+" data this is ads servise got one ads")
      this.senttoAproveTable(data.data(),id);
    });
  }

  senttoAproveTable(ads,id) {
    this.adsservices.aprovetheAds(ads,id).then(data => {
      this.issendTOAprove = true;





    }, error => {
      this.issendTOAprove = false;
    });
  }

}
