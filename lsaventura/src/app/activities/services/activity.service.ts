import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  public getWeatherList(date: any): Observable<any> {
    return this.http.get<any>(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/753692/${date}`)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  public getLogo(key: string): Observable<any> {
    // try {
    //   const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/static/img/weather/${key}.svg`);
    //   const json = await response.json();
    //   return json;
    // } catch (err) {
    //   console.error(err);
    // }
    return this.http.get<any>(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/static/img/weather/${key}.svg`)
    .pipe(
      catchError(err => throwError(err))
    );
  }
}
