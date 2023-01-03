import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  faSearch = faSearch;
  @Output() movieSearched: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  sendSearch(search: string | any) {
    this.movieSearched.emit(search.target.value);
  }
  ngOnInit(): void {
  }

}
