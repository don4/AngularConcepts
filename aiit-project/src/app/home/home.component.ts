import { Component } from '@angular/core';
import {AiitServices} from './app.services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title:string;
    constructor(private  _aiitservices: AiitServices){
    
  }
  ngOnInit(){
    this.title = this._aiitservices.changeHeading();
  }
}
