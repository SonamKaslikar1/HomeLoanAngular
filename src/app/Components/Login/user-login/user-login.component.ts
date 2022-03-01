import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  userLoginForm: any;
  ngOnInit(): void {
    this.userLoginForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required, Validators.minLength(5)],
      password: ['',Validators.required]
    })
  }
  get username() {
    return this.userLoginForm.get('username');
  }
  get password() {
    return this.userLoginForm.get('password');
  }

}
