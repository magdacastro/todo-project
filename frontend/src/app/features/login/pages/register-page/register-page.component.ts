import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  // public user:Person;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(private auth:AuthService, private router: Router) {
    // this.user = {
    //   name: "",
    //   email: "",
    //   password: ""
    // }
  }

  getRegister(){
    if(this.userForm.valid) {
      this.auth.getRegister(this.userForm.value);
      this.router.navigate(['/login']);

    } else {
      alert('error formulário inválido')
    }
  }

  ngOnInit(): void {
  }

}
