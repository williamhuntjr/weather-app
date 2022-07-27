import { Component, OnInit } from '@angular/core';
import { CityListService } from '../shared/city-list.service';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})

export class CurrentWeatherComponent {
  title = 'Current Weather';
  constructor(private cities: CityListService) {}
  
  ngOnInit(){
	setTimeout(()=>{ 
	      this.cities.setCurrentLocation();
    }, 3000);
  console.log("yes");
  }
  
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
