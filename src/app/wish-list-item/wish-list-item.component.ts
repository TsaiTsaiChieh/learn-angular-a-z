import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import events from '../shared/services/EventService';
import { WishItem } from '../shared/models/wishItem';
@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent implements OnInit {
  @Input() wish!: WishItem;
  // @Input() fulfilled!: boolean;
  // @Output() fulfilledChange = new EventEmitter<boolean>();
  get cssClass() {
    return {
      strikeout: this.wish.isCompleted,
      'text-muted': this.wish.isCompleted,
    };
  }
  constructor() {}

  ngOnInit(): void {}

  toggleFulfilled() {
    this.wish.isCompleted = !this.wish.isCompleted;
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }
}
