import { Component, OnInit } from '@angular/core';
import { faBookmark, faTv, faFilm, faHome} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  faBookmark = faBookmark;
  faTv = faTv;
  faFilm = faFilm;
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
