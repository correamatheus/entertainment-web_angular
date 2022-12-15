import { Component, OnInit } from '@angular/core';
import { info } from 'src/app/models/info';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  trending: info[] = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {

    this.dashboardService.getTrending().subscribe({
      next: (res) => {
        this.trending = res
        console.log(res)
      }
    })
  }

}
