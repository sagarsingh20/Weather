import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  constructor(public http: HttpClient) { }
  @Input() iteml2:number;
  @Input() iteml1:number;
  @Input() item:any;
  
  ngOnInit() { }
  
}
