import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://api.github.com/';
  constructor(private http: HttpClient, private route: Router) { }

  public getData(filter: string): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'search/users?q=' + filter + '&per_page=10')
  }

  public getUser(filter: string): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'users/' + filter).pipe(
      catchError(e => {
        if(e.status == 404) this.route.navigate(['/not-found']);
        
        return e;
      })
    )
  }
}