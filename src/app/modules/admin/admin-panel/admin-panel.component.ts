import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {AdminData} from '../../../domain/AdminData';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ADMIN} from '../../../mock-data/admin-mock';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {

  @Input() adminMode: boolean;
  adminData: AdminData;
  private adminForm: FormGroup;
  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.getAdminData();
  }

  private createForm() {
    this.adminForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get login(): AbstractControl {
    return this.adminForm.get('login');
  }

  get password(): AbstractControl {
    return this.adminForm.get('password');
  }

  public checkValidate() {
    const login = this.login.value;
    const password = this.password.value;
    this.authenticationService.getUser({login, password});
    if (login === ADMIN.login && password === ADMIN.password) {
      this.adminMode = true;
    }
  }

  getAdminData(): void {
    this.authenticationService.getAdminReader()
      .subscribe((data: any) => {
        if (data.login === ADMIN.login && data.password === ADMIN.password) {
          this.adminMode = true;
        }
        this.adminMode = false;
      });
  }

}
