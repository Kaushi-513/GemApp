import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {SingupComponent} from './singup/singup.component';
// import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewadsComponent } from './viewads/viewads.component';
import { UploadadsComponent } from './uploadads/uploadads.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ManageadsComponent } from './manageads/manageads.component';
import { AproveADSComponent } from './aprove-ads/aprove-ads.component';
import { DeleteAdsComponent } from './delete-ads/delete-ads.component';
import { AngularFireStorage } from 'angularfire2/storage';
@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    // LoginComponent,
    HomeComponent,
    LoginformComponent,
    UserhomeComponent,
    ViewadsComponent,
    UploadadsComponent,
    ProfileComponent,
    AdminhomeComponent,
    ManageadsComponent,
    AproveADSComponent,
    DeleteAdsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
      CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
