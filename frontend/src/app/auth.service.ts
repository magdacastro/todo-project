import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Person } from './features/login/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string = "http://localhost:3000/users";

  constructor(public api:ConfigService) { }

  getUsers(){
    return this.api.get(this.apiUrl);
  }

  getRegister(obj:Person){
    return this.api.post(this.apiUrl, obj);
  }
}
