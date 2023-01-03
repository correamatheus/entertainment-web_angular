import { Component, Input, OnInit } from '@angular/core';
import { info } from 'src/app/models/info';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() title: string = "";
  @Input() infoArray: info[] = [];
  showIconPlay: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showPlayMouseOver(i: number){
    this.showIconPlay = true;
  }

  hiddenPlayMouseOut(i: number){
      this.showIconPlay = false;
  }
}
