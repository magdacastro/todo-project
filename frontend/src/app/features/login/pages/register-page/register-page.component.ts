import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public user:Person;

  constructor(private auth:AuthService, private router: Router) { 
    this.user = {
      name: "",
      email: "",
      password: ""
    }
  }
  
  getRegister(){
    this.auth.getRegister(this.user);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
