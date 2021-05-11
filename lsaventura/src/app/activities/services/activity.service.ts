import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  // https://www.metaweather.com/api/location/753692/2021/05/09/

  keyBcn = 753692;

  public getWeatherList(date: any): Observable<any> {
    return this.http.get<any>(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/753692/${date}`)
      .pipe(
        catchError(err => throwError(err))
      );
  }

  async getLogo(key: string): Promise<any> {
    try {
      const response = await fetch(`https://www.metaweather.com/static/img/weather/${key}.svg`);
      const json = await response.json();
      return json;
    } catch (err) {
      console.error(err);
    }
  }
  /*
  sn=snow,
  sl=sleet,
  h=hail,
  t=thunderstorm,
  hr=heavy rain,
  lr=light rain,
  s=showers,
  hc=heavy cloud,
  lc=light cloud,
  c=clear
  */
}
