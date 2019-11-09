import { Component, OnInit } from '@angular/core';
import {AdsService} from '../Services/ads.service';

@Component({
  selector: 'app-viewads',
  templateUrl: './viewads.component.html',
  styleUrls: ['./viewads.component.css']
})
export class ViewadsComponent implements OnInit {
  ads: Array<any>;
  constructor(private  adsinfo: AdsService) { }

  ngOnInit() {
// this fuction run when view ads components load
    this.adsList();
  } 

  reserve(id){
    this.adsinfo.reserveAd(id);
  }


  //this is for delaration for adslist function
  adsList() {

    // console.log(this.adsinfo=this.lo.authority)
    this.adsinfo.ViewaprovedAds().subscribe(data => {
      // this.article=art;
      this.ads = data;
      // console.log(data.map(
      //   da => {
      //     console.log(da.payload.doc.id);
      //   }
      //   )
      // )

    })
  }




}
