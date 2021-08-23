import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  
  constructor(private http: HttpClient) { 
  }

  get(url:string){
    return this.http.get<any>(url);
  }

  delete(url:string){
    return this.http.delete(url).subscribe(data => console.log(data));
  }

  post(url:string, obj:Object){
    return this.http.post(url, obj).subscribe(data => console.log(data));
  }

}
