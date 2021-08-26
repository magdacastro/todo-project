import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private http: HttpClient) {
  }

  get<T>(url:string){
    return this.http.get<T>(url);
  }

  delete(url:string){
    return this.http.delete(url).pipe(tap(data => console.log(data)));
  }

  post<T>(url:string, obj: any){
    return this.http.post<T>(url, obj).pipe(tap(data => console.log(data)));
  }

}
