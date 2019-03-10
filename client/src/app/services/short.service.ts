import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from "rxjs"
import { map, retry, catchError } from "rxjs/operators"
import { IShort } from "../interfaces/short"
import { environment as env } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ShortService {

  constructor(
    private http: HttpClient,
  ) { }

  public generate(): Observable<string> {
    return this.http.get<IShort>(`${env.apiUrl}/short/generate`)
      .pipe(
        retry(3),
        map((response: IShort) => {
          return response.short
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError("Tried to fetch a short 3 times, however the request was not success.")
        })
      )
  }
}
