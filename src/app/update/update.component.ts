import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input()
  trackId

  result : string
  
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit() {
  }

  updatecomment(comment){
    this.result = "http://localhost:8080/api/v1/muzix/"+this.trackId;
    this.http.put(this.result,{
      "comment" : comment
    })
    .subscribe(data  => {
      console.log("PUT Request is successful ", data);
    },
    error  => {
    console.log("Error", error);
  });
  
}

}
