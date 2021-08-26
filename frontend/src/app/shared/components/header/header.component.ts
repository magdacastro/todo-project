import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { Person } from 'src/app/features/login/models/person.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<Person | null>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.currentUser.asObservable();
  }

  ngOnInit(): void {

  }

}
