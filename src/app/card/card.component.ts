import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MuzixService } from '../muzix.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  
  searchdata;
  public trackname;
  muzix : string;

  constructor(private muzixService: MuzixService,private _router : ActivatedRoute, private router : Router) { }
  // Search(value){  // Search(value){  // Search(v  // Search(value){
  //   this.muzix = value;
  //   this.muzixService.getMuzix(this.muzix).subscribe((data) => {
  //     // console.log("incoming data is ", data['results']['trackmatches']['track']);
  //     this.searchdata = data['results']['trackmatches']['track'];
  //   });
  // }alue){
  //   this.muzix = value;
  //   this.muzixService.getMuzix(this.muzix).subscribe((data) => {
  //     // console.log("incoming data is ", data['results']['trackmatches']['track']);
  //     this.searchdata = data['results']['trackmatches']['track'];
  //   });
  // }
  //   this.muzix = value;
  //   this.muzixService.getMuzix(this.muzix).subscribe((data) => {
  //     // console.log("incoming data is ", data['results']['trackmatches']['track']);
  //     this.searchdata = data['results']['trackmatches']['track'];
  //   });
  // }
  //   this.muzix = value;
  //   this.muzixService.getMuzix(this.muzix).subscribe((data) => {
  //     // console.log("incoming data is ", data['results']['trackmatches']['track']);
  //     this.searchdata = data['results']['trackmatches']['track'];
  //   });
  // }
  ngOnInit() {
    this.trackname = this._router.snapshot.paramMap.get('trackname');
    this.muzixService.getMuzix(this.trackname).subscribe((data) => {
      this.searchdata =data['results']['trackmatches']['track'];
    });
  }

  getImage(search){
    return search['image'][3]['#text']
  }

//  

}
