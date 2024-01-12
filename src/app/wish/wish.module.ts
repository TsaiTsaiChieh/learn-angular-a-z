import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
})
export class WishModule {}
