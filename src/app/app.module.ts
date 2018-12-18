import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { PricelistPageComponent } from './pricelist-page/pricelist-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    GalleryPageComponent,
    ContactsPageComponent,
    ServicesPageComponent,
    PricelistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
