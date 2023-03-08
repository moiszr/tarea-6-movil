import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss'],
})
export class ClimateComponent  implements OnInit {

  weatherData: any;
  location: string = 'Santo Domingo';
  currentDate: string = new Date().toLocaleDateString();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWeatherData();
  }
  
  getWeatherData() {
    this.http
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.location}?unitGroup=metric&key=NRVP95QH6VC7AM7VZ3J4DMDSQ&contentType=json`
      )
      .pipe(
        catchError((error: any) => {
          console.error(error);
          return error;
        })
      )
      .subscribe((res: any) => {
        this.weatherData = res;
        console.log(this.weatherData);
      });
  }
}
