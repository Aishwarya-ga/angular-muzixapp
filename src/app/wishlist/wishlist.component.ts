import { Component, OnInit } from '@angular/core';
import { MuzixService } from '../muzix.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  allTracks 
  constructor(private muzixService : MuzixService) { }

  ngOnInit() {
  }

  getAll(){
    this.muzixService.getWishlistMuzix().subscribe((data) =>{
      this.allTracks = data;
      console.log(this.allTracks);
    })
  }

}
