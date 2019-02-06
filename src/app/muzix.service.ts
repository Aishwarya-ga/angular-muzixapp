import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from './muzix';


@Injectable({
  providedIn: 'root'
})
export class MuzixService {

  url;

  constructor(private http:HttpClient) {
  }
  getMuzix(trackName:String){
    this.url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + trackName + "&api_key=fc43aa28f19b33fcf518106c4c78e50b&format=json";
    return this.http.get(this.url);
  }

  getWishlistMuzix(){
    return this.http.get('http://localhost:8080/api/v1/muzixs');
  }
}
