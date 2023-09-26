import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';

import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
  ],
  imports: [
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyBXMlt6orQam_bTf2UZqu1HTMThHb6Josc",
        authDomain: "budget-buddy-8125a.firebaseapp.com",
        projectId: "budget-buddy-8125a",
        storageBucket: "budget-buddy-8125a.appspot.com",
        messagingSenderId: "723345358394",
        appId: "1:723345358394:web:0b811c440d9fe20ea3bf03",
        measurementId: "G-YB9BHRR85N"
    }
    ),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // AuthModule.forRoot(environment.auth)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
