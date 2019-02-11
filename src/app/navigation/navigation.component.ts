import { MuzixService } from './../muzix.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  searchdata;
  imageUrl;
  muzix : string;

  allTracks
  constructor(private muzixService: MuzixService) { }

  ngOnInit() {
  
  }
  
  // Search(value){
  //   this.muzix = value;
  //   this.muzixService.getMuzix(this.muzix).subscribe((data) => {
  //     // console.log("incoming data is ", data['results']['trackmatches']['track']);
  //     this.searchdata = data['results']['trackmatches']['track'];
  //   });
  // }

  // getImage(search){
  //   return search['image'][3]['#text']
  // }
  // getAll(){
  //   this.muzixService.getWishlistMuzix().subscribe((data) =>{
  //     this.allTracks = data;
  //     console.log(this.allTracks);
  //   })
  // }
}
