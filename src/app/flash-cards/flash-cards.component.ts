import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.scss']
})
export class FlashCardsComponent implements OnInit {

  cards: Card[];
  card: Card;
  cardIndex: number;

  constructor() {
    this.cards = new Array;
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/back-block.png', 'B', 'Back Block'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/high-block.png', 'A', 'High Block'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/low-block.png', 'L', 'Low Block'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/head-block.png', 'H', 'Head Block'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/forearm.png', 'F', 'Forearm'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/leg-block.png', 'E', 'Leg Block'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/illegal-contact.png', 'C', 'Illegal Contact', 'Including: Illegal Assist, Early Hit'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/direction.png', 'D', 'Direction', 'Including: Stop Block'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/multiplayer.png', 'M', 'Multiplayer'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/illegal-positioning.png', 'P', 'Illegal Positioning', 'Including: Destruction, Skating Out of Bounds, Failure to Reform, Failure to Return, Failure to Yield'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/cut.png', 'X', 'Cut', 'Including: Illegal Re-Entry'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/interference.png', 'N', 'Interference', 'Including: Delay of Game'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/illegal-procedure.png','I', 'Illegal Procedure','Including: Star Pass Violation, Star Pass Interference'))
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/misconduct.png', 'G', 'Misconduct', 'Including: Insubordination'));
    this.cards.push(new Card('What is the penalty?', '../../../assets/images/expulsions.png', '-', 'Expulsion'));
  }

  ngOnInit(): void {
    this.setCardFromIndex(0);
  }

  setCardFromIndex(index: number) {
    this.cardIndex = index;
    this.card = this.cards[index];
  }

  back() {
    const backIndex = this.cardIndex - 1;
    if (backIndex >= 0) {
      this.setCardFromIndex(backIndex);
    }
  }

  next() {
    const nextIndex = this.cardIndex + 1;
    if (nextIndex < this.cards.length) {
      this.setCardFromIndex(nextIndex);
    }
  }

}
