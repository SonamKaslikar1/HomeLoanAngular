import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  adminLoginForm: any;
  ngOnInit(): void {
    this.adminLoginForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required, Validators.minLength(5)],
      password: ['',Validators.required]
    })
  }
  get username() {
    return this.adminLoginForm.get('username');
  }
  get password() {
    return this.adminLoginForm.get('password');
  }

}
