import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { MuzixService } from '../muzix.service';

@Component({
  selector: 'app-wishlistcard',
  templateUrl: './wishlistcard.component.html',
  styleUrls: ['./wishlistcard.component.css']
})
export class WishlistcardComponent implements OnInit {

  delete;
  allTracks ;

  constructor(private http : HttpClient,private muzixService : MuzixService) { }

  ngOnInit() {
    this.muzixService.getWishlistMuzix().subscribe((data) =>{
      this.allTracks = data;
      console.log(this.allTracks);
    })
  }

  deleteMuzix(id){
    this.delete = "http://localhost:8080/api/v1/muzix/"+id;
    this.http.delete(this.delete).subscribe(data  => {
      console.log("DELETE Request is successful ", data);
    },
    error  => {
    console.log("Error", error);
    });
  }

}
