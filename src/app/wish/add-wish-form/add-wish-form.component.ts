import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
})
export class AddWishFormComponent implements OnInit {
  @Output() addWish = new EventEmitter<WishItem>();
  newWishText = '';
  constructor() {}

  ngOnInit(): void {}
  newWishItem = '';

  addNewWish() {
    // add wish to items array
    this.addWish.emit(new WishItem(this.newWishText));
    // clear the textbox
    this.newWishItem = '';
  }
}
