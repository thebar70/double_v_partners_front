import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/users.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  protected userId: string = '';
  protected user!: User;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private navigate: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.userId) {
      this.apiService.getUser(this.userId).subscribe(data => {
        this.user = data;
        
      });
    }

  }
}
