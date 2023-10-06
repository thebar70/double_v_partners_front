import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() user!: User;
}
