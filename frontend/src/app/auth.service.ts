import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { Person } from './features/login/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string = "http://localhost:3000/users";

  currentUser = new BehaviorSubject<Person | null>(null);

  constructor(public api:ConfigService) { }

  getUsers() {
    return this.api.get<Person[]>(this.apiUrl);
  }

  getRegister(obj:Person){
    return this.api.post(this.apiUrl, obj);
  }

  setCurrentUser(currentUser: Person | null) {
    this.currentUser.next(currentUser);
  }
}
