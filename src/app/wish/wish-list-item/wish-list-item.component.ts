import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from 'src/app/shared/models/wishItem';
import { EventService } from 'src/app/shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent implements OnInit {
  @Input() wish!: WishItem;

  get cssClass() {
    return {
      strikeout: this.wish.isCompleted,
      'text-muted': this.wish.isCompleted,
    };
  }
  constructor(private events: EventService) {}

  ngOnInit(): void {}

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    this.wish.isCompleted = !this.wish.isCompleted;
  }
}
