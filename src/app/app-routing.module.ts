import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CardComponent } from './card/card.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path : 'navigation', component : NavigationComponent},
  {path : 'wishlist', component:  WishlistComponent },
  {path : 'card' , component :  CardComponent}
  // {path : 'card', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
