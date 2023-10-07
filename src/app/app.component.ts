import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/users.model';
import { ApiService } from './service/api.service';
import { publishFacade } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public title: string = 'double_v_partners_front-app';
  ngOnInit() {
  }

}
