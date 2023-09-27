import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor (public firebaseService: FirebaseService) {}

  ngOnInit(){
    
  }

  onSignUp(email: string, password: string, username: string){
    this.firebaseService.signup(email, password, username)
  }

  onSignIn(email: string, password: string){
    this.firebaseService.signin(email, password)
  }

  signUpGoogle(){
    this.firebaseService.signUpWithGoogle()
  }
}
