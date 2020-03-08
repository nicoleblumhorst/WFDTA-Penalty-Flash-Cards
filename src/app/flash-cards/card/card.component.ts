import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card: Card;
  @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() next: EventEmitter<boolean> = new EventEmitter<boolean>();
  hideAnswer: boolean = true;

  constructor() {}

  backClicked() {
    console.log('back clicked');
    this.hideAnswer = true;
    this.back.emit(true);
  }

  nextClicked() {
    this.hideAnswer = true;
    this.next.emit(true);
  }

}
