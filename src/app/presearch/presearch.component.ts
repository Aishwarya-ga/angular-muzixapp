import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-presearch',
  templateUrl: './presearch.component.html',
  styleUrls: ['./presearch.component.css']
})
export class PresearchComponent implements OnInit {

  trackname : string;
  constructor(private _router : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }

  search() : any{
    this.router.navigate(['/showcard', this.trackname]);
  }

}
