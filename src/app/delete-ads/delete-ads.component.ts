import { Component, OnInit } from '@angular/core';
import {AdsService} from '../Services/ads.service';

@Component({
  selector: 'app-delete-ads',
  templateUrl: './delete-ads.component.html',
  styleUrls: ['./delete-ads.component.css']
})
export class DeleteAdsComponent implements OnInit {
  ads: Array<any>;
  constructor(private  adsinfo: AdsService) { }

  ngOnInit() {


    this.adsList();
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



  deleteAd(value,adsID) {
    this.adsinfo.deleteByAdmin(value,adsID);

  }
}
