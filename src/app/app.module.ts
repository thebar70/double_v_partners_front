import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserShowComponent } from './components/user/user-show/user-show.component';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { UserSearchComponent } from './components/user/user-search/user-search.component';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  NgxAwesomePopupModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';

import { DescriptionComponent } from './components/core/information/description/description.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { GraphQLModule } from './graphql.module';
import { ListTicketComponent } from './components/ticket/list-ticket/list-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserShowComponent,
    PageNotFoundComponent,
    UserSearchComponent,
    DescriptionComponent,
    TicketComponent,
    ListTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
    NgxAwesomePopupModule.forRoot(),
    ToastNotificationConfigModule.forRoot(), GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
