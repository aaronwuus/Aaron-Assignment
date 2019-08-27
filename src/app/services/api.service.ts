import { NearEarthObject } from './../models/NearEarthObject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, throwError } from 'rxjs';
import { map, catchError, retryWhen, delayWhen, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  browseData(path: string): Observable<any> {
    return this.httpClient.get(path)
      .pipe(map(data => data as any),
        catchError(e => throwError(new Error('Bad Request!!!')))
      );
  }
  getDetails(path: string, id: number): Observable<NearEarthObject> {
    return this.httpClient.get(path + id)
      .pipe(map(data => data as NearEarthObject),
      retryWhen(errors => {
        return errors
                .pipe(
                    delayWhen(() => timer(2000)),
                    tap(() => console.log('retrying...'))
                  );
              }
          )
      );
  }
}
