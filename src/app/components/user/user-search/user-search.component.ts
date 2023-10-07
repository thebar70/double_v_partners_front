import { AlertComponent } from '../../core/alert/alert.component';
import { ApiService } from 'src/app/service/api.service';
import { User } from 'src/app/models/users.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  private regex: RegExp = /\bdoublevpartners\b/;
  protected resultsNotFound: boolean = false;
  protected loading: boolean = false;
  protected inputErrors: any = false;
  protected currentFilter: string = '';

  users: User[] = [];

  constructor(private apiService: ApiService, private alert: AlertComponent) { }

  searchUser() {
    if (!this.validateFilter()) return;

    this.fetchData();
  }

  validateFilter() {
    this.inputErrors = this.resultsNotFound = false;
    if (this.currentFilter.length < 4) return false;

    if (this.regex.test(this.currentFilter)) {
      this.inputErrors = 'Este criterio de busqueda no esta permitido';
      this.alert.showErrorMessage('Palabra restringida');

      return false;
    }

    return true;
  }

  fetchData() {
    this.loading = true;
    this.apiService.search(this.currentFilter).then(data => {

      this.users = data.items;

      this.loading = false;
      this.resultsNotFound = (this.users.length === 0);
    });
  }
}
