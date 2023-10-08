import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';


const TICKET_INFORMATIONS = gql`query { getTickes { uuid description status created_at updated_at } } `;


@Injectable({
  providedIn: 'root'
})
export class TicketInformationService {

  constructor(private apollo: Apollo) { }

  getTicketInformations(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: TICKET_INFORMATIONS
    }).valueChanges;
  }
}
