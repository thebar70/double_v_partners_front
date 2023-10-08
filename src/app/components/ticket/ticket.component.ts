import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Observable } from 'rxjs';
import { TicketInformationService } from 'src/app/service/ticket-information.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  protected resultsNotFound: boolean = false;
  protected loading: boolean = false;

  protected currentFilter: string = '';

  tickets: any[] = [];

  apiService = inject(ApiService);
  ticketInformations$!: Observable<any>;

  constructor(private ticketInformations: TicketInformationService) {
  }

  ngOnInit(): void {
    this.ticketInformations.getTicketInformations().subscribe(({ data, loading }) => {
      this.tickets = data.getTickes;
    });


  }
}
