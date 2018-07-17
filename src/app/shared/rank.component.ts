import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'mean-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnChanges {

  @Input() rating = 0;
  starWidth = 0;
  numbers: Array<number>;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {
    this.numbers = Array(this.rating).fill(this.rating);
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
    this.numbers = Array(this.rating).fill(this.rating);
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
