import { Component, OnInit } from '@angular/core';
import { WishItem } from './shared/models/wishItem';
import { EventService } from './shared/services/EventService';
import { WishService } from './wish/wish.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'wishlist';
  items!: WishItem[];

  constructor(private events: EventService, private wishService: WishService) {
    this.events.listen('removeWish', (wish: any) => {
      // todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }
  filter: any;

  ngOnInit() {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
}
