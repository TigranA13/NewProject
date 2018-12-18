/**
 * Created by tigra on 17-Dec-18.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ContactsPageComponent} from "./contacts-page/contacts-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {GalleryPageComponent} from "./gallery-page/gallery-page.component";
import {PricelistPageComponent} from "./pricelist-page/pricelist-page.component";
import {ServicesPageComponent} from "./services-page/services-page.component";

const route: Routes = [
  {path:"", redirectTo:"home",  pathMatch: 'full'},
  {path:"home", component: HomePageComponent},
  {path:"about", component: AboutPageComponent},
  {path:"gallery", component: GalleryPageComponent},
  {path:"services", component: ServicesPageComponent},
  {path:"pricelist", component: PricelistPageComponent},
  {path:"contacts", component: ContactsPageComponent}
];

@NgModule({

  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
