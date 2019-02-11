import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CardComponent } from './card/card.component';
import { NavigationComponent } from './navigation/navigation.component';
// import { SearchTrackComponent } from './search-track/search-track.component';
import { WishlistcardComponent } from './wishlistcard/wishlistcard.component';

const routes: Routes = [
  {path : 'navigation', component : NavigationComponent},
  {path : 'wishlist', component:  WishlistComponent },
  {path : 'showcard/:trackname' , component :  CardComponent},
  {path : 'show', component :  WishlistcardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
