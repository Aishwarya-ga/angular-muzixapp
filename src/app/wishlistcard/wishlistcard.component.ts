import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wishlistcard',
  templateUrl: './wishlistcard.component.html',
  styleUrls: ['./wishlistcard.component.css']
})
export class WishlistcardComponent implements OnInit {

  @Input()
  url 

  delete;
  constructor(private http : HttpClient) { }

  ngOnInit() {
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
