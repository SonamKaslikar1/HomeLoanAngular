import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoanComponent } from './Components/loan/loan.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { HomeLoanComponent } from './Components/home-loan/home-loan.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Ng5SliderModule } from 'ng5-slider';
import { UserLoginComponent } from './Components/Login/user-login/user-login.component';
import { AdminLoginComponent } from './Components/Login/admin-login/admin-login.component';
import { AfterUserLoginComponent } from './Components/Login/after-user-login/after-user-login.component';
import { AfterAdminLoginComponent } from './Components/Login/after-admin-login/after-admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoanComponent,
    AboutUsComponent,
    ContactUsComponent,
    CalculatorComponent,
    HomeLoanComponent,
    RegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AfterUserLoginComponent,
    AfterAdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule, FormsModule,NgxSliderModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
