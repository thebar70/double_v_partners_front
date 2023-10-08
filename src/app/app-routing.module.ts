import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserShowComponent } from './components/user/user-show/user-show.component';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { scoreGuard } from './guards/score.guard';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {
    path: 'tickets',
    title: 'Buscar Tickets',
    component: TicketComponent
  },
  {
    path: 'user/show/:login',
    title: 'Mostrar Usuario',
    component: UserShowComponent,
    canActivate: [scoreGuard]
  },
  {
    path: 'user/show',
    title: 'Mostrar Usuario',
    component: UserShowComponent
  },
  { path: '', redirectTo: '/user/show/angular', pathMatch: 'full' },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
