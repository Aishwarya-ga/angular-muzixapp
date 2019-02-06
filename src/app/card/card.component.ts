import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() 
  trackname : String
  @Input() 
  trackartist : String
  @Input() 
  image : String
  @Input()
  id : number

  comment : String=""
  

  constructor(private http : HttpClient) { }

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
