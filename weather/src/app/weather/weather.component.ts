import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  check:any
  data:string;
  lattitude=28.6667;
  longitutde=77.2167;
  public report;
  dataa(){
    this.http.get('https://places.ls.hereapi.com/places/v1/discover/here?apiKey=lcvNMTu5iyAcndxgt5OHSGhN7i9PQrU3qjKobY-3oU8&at='
    +this.lattitude+','+this.longitutde+'&pretty')
      .subscribe(data=>{
        this.check=data
    })
  }
  hide:boolean=false
  weatherForm= new FormGroup({})
  constructor(private http: HttpClient ) { }
  
  ngOnInit() {
    this.weatherForm= new FormGroup({
      location:new FormControl('delhi')
    })
    this.dataa(); 
    this.checkWeather(this.weatherForm.value);
  }
  
  checkWeather(formValues){
    this.data=formValues.location;
    this.http.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.data+'&appid=3e6f1bd0197f58af23bd6387c8afe543')
      .subscribe(d=>{
        console.log(d)
        this.report=d;
        this.lattitude=this.report.city.coord.lat;
        this.longitutde=this.report.city.coord.lon;
        this.dataa()
      },error=>{
        alert("Wrong Details")
    })
   
  }
  
}
