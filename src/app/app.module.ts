import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserShowComponent } from './components/user/user-show/user-show.component';
import { PageNotFoundComponent } from './components/app/page-not-found/page-not-found.component';
import { UserSearchComponent } from './components/user/user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserShowComponent,
    PageNotFoundComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
