import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityListService } from './shared/city-list.service';
import { HttpModule } from '@angular/http';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
	HttpModule
  ],
  providers: [CityListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
