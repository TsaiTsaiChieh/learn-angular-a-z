import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wishlist';
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];
  newWishItem = '';
  addNewWish() {
    // add wish to items array
    this.items.push(new WishItem(this.newWishItem));
    // clear the textbox
    this.newWishItem = '';
  }
  toggleItem(item: WishItem) {
    item.isCompleted = !item.isCompleted;
    console.log(item);
  }
}
