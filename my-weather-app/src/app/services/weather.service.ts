import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getLocationId(state: string): Observable<any> {

    return this.http.get<any>('https://api.weather.gov/zones?area=' + state + "&type=forecast&limit=3");

  }

  public getWeatherReport(id: string): Observable<any> {

    return this.http.get<any>('https://api.weather.gov/zones/forecast/' + id + '/forecast');

  }

}
