import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirebaseService } from './services/firebase.service';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';

import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // AuthModule.forRoot(environment.auth)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
