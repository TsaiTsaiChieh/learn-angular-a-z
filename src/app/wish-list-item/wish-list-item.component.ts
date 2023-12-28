import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import events from '../shared/services/EventService';
@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent implements OnInit {
  @Input() wishText!: string;
  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();
  get cssClass() {
    return { strikeout: this.fulfilled, 'text-muted': this.fulfilled };
  }
  constructor() {}

  ngOnInit(): void {}

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

  removeWish() {
    events.emit('removeWish', this.wishText);
  }
}
