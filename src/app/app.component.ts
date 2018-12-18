import { Component } from '@angular/core';
import {AppService} from './app.service';
import {Router} from '@angular/router'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data :any = [];

  constructor(private service: AppService, private router: Router ) { }

  ngOnInit() {
    this.data.push(this.service.getData());
    
  }

}

