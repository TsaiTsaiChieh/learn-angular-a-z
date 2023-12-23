import { Component } from '@angular/core';
import { WishItem } from './shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted,
];
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

  listFilter: any = '0';
  newWishItem = '';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }

  addNewWish() {
    // add wish to items array
    this.items.push(new WishItem(this.newWishItem));
    // clear the textbox
    this.newWishItem = '';
  }
}
