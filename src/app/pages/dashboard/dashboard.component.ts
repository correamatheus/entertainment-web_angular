import { Component, OnInit } from '@angular/core';
import { info } from 'src/app/models/info';
import { DashboardService } from 'src/app/services/dashboard.service';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faBookmark=faBookmark;


  trending: info[] = [];
  recommended: info[] = [];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {

    this.dashboardService.getTrending().subscribe({
      next: (res) => {
        this.trending = res
        console.log(res)
      }
    })

    this.getRecommended();
  }

  getRecommended(){
    this.dashboardService.getRecommended().subscribe({
      next: (res) => {
        this.recommended = res
        console.log(res)
      }
    })
  }


}
