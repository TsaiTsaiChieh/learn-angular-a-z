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

  listFilter: string = '0';
  newWishItem = '';

  get visibleItems(): WishItem[] {
    let value = this.listFilter;
    if (value === '0') {
      return this.items;
    } else if (value === '1') {
      return this.items.filter((ele) => !ele.isCompleted);
    } else {
      return this.items.filter((ele) => ele.isCompleted);
    }
  }

  addNewWish() {
    // add wish to items array
    this.items.push(new WishItem(this.newWishItem));
    // clear the textbox
    this.newWishItem = '';
  }

  // filterChange(value: any) {
  //   console.log(value);
  //   if (value === '0') {
  //     this.visibleItems = this.items;
  //   } else if (value === '1') {
  //     this.visibleItems = this.items.filter((ele) => !ele.isCompleted);
  //   } else if (value === '2') {
  //     this.visibleItems = this.items.filter((ele) => ele.isCompleted);
  //   }
  // }

  toggleItem(item: WishItem) {
    item.isCompleted = !item.isCompleted;
    console.log(item);
  }
}
