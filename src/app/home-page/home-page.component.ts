import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {HomeServiceService} from "./home-service.service";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data :any = [];

  constructor(private titleService: Title, private service: HomeServiceService ) { }

  ngOnInit() {

    this.data.push(this.service.getData());
    this.titleService.setTitle( "home" );
  }



}
