import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
// import {LoginComponent} from './login/login.component';
import {SingupComponent} from './singup/singup.component';
import {LoginformComponent} from './loginform/loginform.component';
import {UserhomeComponent} from './userhome/userhome.component';
import {ViewadsComponent} from './viewads/viewads.component';
import {UploadadsComponent} from './uploadads/uploadads.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminhomeComponent} from './adminhome/adminhome.component';
import {ManageadsComponent} from './manageads/manageads.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginformComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  },
  {
    path: 'userhome/viewads',
    component: ViewadsComponent
  }, {
    path: 'userhome',
    component: UserhomeComponent
  },{
    path: 'userhome/postads',
    component: UploadadsComponent
  },{
    path: 'userhome/profile',
    component: ProfileComponent
  },
  {
    path: 'admin',
    component: AdminhomeComponent
  },
  {
    path: 'admin/mangeAds',
    component: ManageadsComponent
  },

  {
    path: 'admin/profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
