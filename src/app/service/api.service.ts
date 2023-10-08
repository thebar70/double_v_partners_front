import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL_GITHUB = 'https://api.github.com/';
  constructor(private http: HttpClient, private route: Router) { }

  /**
   * Request thit Obervable
  */
  public getUser(filter: string): Observable<any> {
    return this.http.get<any>(this.BASE_URL_GITHUB + 'users/' + filter).pipe(
      catchError(e => {
        if (e.status == 404) this.route.navigate(['/not-found']);

        return e;
      })
    )
  }

  /**
   * Request con promise
  */
  public searchUsers(filter: string) {
    return new Promise<any>((resolve, reject) => {
      let apiURL = `${this.BASE_URL_GITHUB}search/users?q=${filter}&per_page=10`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          data => { // Success
            resolve(data);
          }
        );
    });
  }

}
