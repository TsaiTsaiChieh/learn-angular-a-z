import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent],
  imports: [BrowserModule, AppRoutingModule, WishModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
