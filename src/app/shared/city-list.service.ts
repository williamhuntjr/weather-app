import { Http } from '@angular/http';
import { Injector, Injectable } from '@angular/core';

@Injectable()
export class CityListService {
  cityList = [];
  currentLocation = [];
  getURL;
  weatherData = [];

  myAppID = 'abcf82bea50365b9053c5eabb16221f6';

  constructor(private http:Http, private injector:Injector) {
	this.http.get('./assets/city.list.json')
	  .subscribe(res => this.cityList = res.json());  
  }
  getCityID(cityName, cityCountry) {
	for (var i = 0, len = this.cityList.length; i < len; i++) {
      if (this.cityList[i].name === cityName && this.cityList[i].country === cityCountry) { 
	    return this.cityList[i].id;		
	  } 
    }
  }
  setCurrentLocation() { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation[0] = position.coords.latitude.toFixed(2);
	    this.currentLocation[1] = position.coords.longitude.toFixed(2);
        this.getURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.currentLocation[0] + '&lon=' + this.currentLocation[1] + '&appid=' + this.myAppID + '&units=imperial';
        this.http.get(this.getURL).subscribe(data => this.weatherData = data.json());  
      });
    }
	else { 
      this.currentLocation = ["38.029308", "-78.476677"]; 
      this.getURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.currentLocation[0] + '&lon=' + this.currentLocation[1] + '&appid=' + this.myAppID + '&units=imperial';
      this.http.get(this.getURL).subscribe(data => this.weatherData = data.json());       
    }
  }
  setLocationZIP(zipcode) {
    this.weatherData = [];
	setTimeout(()=>{ 
      this.getURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=' + this.myAppID + '&units=imperial';
	  this.http.get(this.getURL).subscribe(data => this.weatherData = data.json());
	}, 3000);	
  }
}
