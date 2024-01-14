import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'second', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
