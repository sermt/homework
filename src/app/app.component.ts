import { Component,OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { APIResponse } from './models/api';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  data!:Observable<APIResponse>;
 
  constructor(private api: ApiService){}

ngOnInit(): void {
  this.data=this.api.getRandomData();
}
}
