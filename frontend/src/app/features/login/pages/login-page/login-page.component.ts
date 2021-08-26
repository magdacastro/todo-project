import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public user:Person;

  constructor(private auth:AuthService, private router: Router) {
    this.user = {
      name: "",
      email: "",
      password: ""
    }
  }

  getLogin(){
    this.auth.getUsers().subscribe(users => {
      const user = users.find((user) => user.email === this.user.email && user.password === this.user.password);
      if(user) {
        this.router.navigate(['/tasks']);
        this.auth.setCurrentUser(user);
      } else {
        alert("This password doesn´t match to this e-mail");
      }
    });
  }

  ngOnInit(): void {
  }

}
