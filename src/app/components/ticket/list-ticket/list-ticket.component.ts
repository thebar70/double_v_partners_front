import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent {
  @Input() ticket!: any;
}
