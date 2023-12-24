import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted,
];
@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
})
export class WishFilterComponent implements OnInit {
  @Input() items: WishItem[] = [];
  @Output() filter = new EventEmitter<any>();

  listFilter: any = '0';

  constructor() {}

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  changeFilter(value: any) {
    this.filter.emit(filters[this.listFilter]);
  }
}
