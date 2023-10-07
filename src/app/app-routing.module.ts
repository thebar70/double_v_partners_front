import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserShowComponent } from './components/user/user-show/user-show.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { UserSearchComponent } from './components/user/user-search/user-search.component';
import { scoreGuard } from './guards/score.guard';

const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: AppComponent
  },
  {
    path: 'user/search',
    title: 'Buscar Usuarios',
    component: UserSearchComponent
  },
  {
    path: 'user/show/:login',
    title: 'Mostrar Usuario',
    component: UserShowComponent,
    canActivate: [scoreGuard]
  },
  { path: '', redirectTo: '/user/search', pathMatch: 'full' },
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
