import { Component, OnInit } from '@angular/core';
import {AdsService} from '../Services/ads.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  ads: Array<any>;
  constructor() { }

  ngOnInit() {


  }

}
