import { Component, OnInit, Input } from '@angular/core';
import { MuzixService } from '../muzix.service';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

 
  @Input() 
  trackname : String
  @Input() 
  trackartist : String
  @Input() 
  image : String
  @Input()
  id : number

  constructor(private http : HttpClient,private muzixService : MuzixService) { }

  ngOnInit() {
    
  }
  addToWishlist(){
        this.http.post("http://localhost:8080/api/v1/muzix",
        {
          "trackId": +this.id,
          "trackName": this.trackname,
          "trackArtist": this.trackartist,
          "imageUrl": this.image,
          "comment" : "Sung by : "+this.trackartist
        },
        {
          headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      })
      .subscribe(data  => {
          console.log("POST Request is successful ", data);
        },
        error  => {
        console.log("Error", error);
    });
    
      
    }

 

}
