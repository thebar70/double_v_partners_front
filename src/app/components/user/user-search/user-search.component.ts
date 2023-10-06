import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  http = inject(HttpClient);
  users: User[] = [];

  public currentFilter: string = '';
  private regex: RegExp = /\bdoublevpartners\b/;
  protected inputErrors: any = false;
  protected resultsNotFound: boolean = false;

  constructor(private apiService: ApiService) { }

  searchUser() {
    this.inputErrors = this.resultsNotFound = false;
    if (this.currentFilter.length < 4) return;

    const forbiddenWord: boolean = this.regex.test(this.currentFilter);
    if(forbiddenWord) {
      this.inputErrors = 'Este criterio de busqueda no esta permitido';
      return;
    }

    this.apiService.getData(this.currentFilter).subscribe(data => {
      this.users = data.items;
      
      this.resultsNotFound = this.users.length === 0;
    });
  }
}
