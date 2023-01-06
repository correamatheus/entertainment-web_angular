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

  moviesAndSeries: info[] = [];
  showIconPlay: boolean = false;
  trending: info[] = [];
  recommended: info[] = [];
  movieAndSerieSearched: string = "";
  movieAndSerieFinded: info[] = [];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {


    this.dashboardService.getTrending().subscribe({
      next: (res) => {
        this.trending = res
      }
    })

    this.getRecommended();
  }

  getRecommended(){
    this.dashboardService.getRecommended().subscribe({
      next: (res) => {
        this.recommended = res
      }
    })
  }

  showPlayMouseOver(i: number){
    this.showIconPlay = true;
    // console.log(i)
  }

  hiddenPlayMouseOut(i: number){
      this.showIconPlay = false;
  }

  receiveSearch(search: string | any) {
    this.movieAndSerieSearched = search;
    this.dashboardService.getSearched(search).subscribe({
      next: (res) => {
        this.movieAndSerieFinded = res;
      }
    })
  }

  bookmarked(title: string){
    this.recommended.filter((el: any) => {
      if(el.title == title){
        el.isBookmarked ? el.isBookmarked = false : el.isBookmarked = true
        this.dashboardService.changeBookmark(this.recommended).subscribe((res)=> console.log(res))
      }
    })
  }


}
