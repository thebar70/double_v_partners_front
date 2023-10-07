import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/users.model';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})

export class UserShowComponent implements OnInit {

  protected userId: string = '';
  protected user!: User;

  @ViewChild("chart") chart: ChartComponent;
  public chartInteractionOptions: Partial<ChartOptions> | any;
  public chartRepoOptions: Partial<ChartOptions> | any;

  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = JSON.parse(JSON.stringify(data));

      this.initChartOptions(this.user.followers,
        this.user.following,
        this.user.public_repos,
        this.user.public_gists);
    });

  }

  initChartOptions(
    followers: number,
    following: number,
    repos: number,
    gist: number) {
    this.chartInteractionOptions = {
      series: [
        {
          name: "Usuarios",
          data: [followers, following]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Interacción del Usuario"
      },
      xaxis: {
        categories: ["Seguidores", "Seguidos"]
      }
    };

    this.chartRepoOptions = {
      series: [
        {
          name: "Repos",
          data: [repos, gist]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Repositorios"
      },
      xaxis: {
        categories: ["Públicos", "Gists"]
      }
    };
  }

}
