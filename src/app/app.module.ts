import { MuzixService } from './muzix.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistcardComponent } from './wishlistcard/wishlistcard.component';
import {MatInputModule} from '@angular/material/input';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardComponent,
    WishlistComponent,
    WishlistcardComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule
  ],

  providers: [MuzixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
