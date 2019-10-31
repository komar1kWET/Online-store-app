import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication/authentication.service';
import {ADMIN} from './mock-data/admin-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Online store';
  adminMode = false;
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getAdminData();
  }
  getAdminData(): void {
    this.authenticationService.getAdminReader()
      .subscribe((data: any) => {
        if (data.login === ADMIN.login && data.password === ADMIN.password) {
          this.adminMode = true;
        }});
  }

  disableAdminMode(): void {
    localStorage.setItem('user', JSON.stringify({login: '', password: ''}));
    this.adminMode = false;
  }
}
