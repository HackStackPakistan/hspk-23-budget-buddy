import { JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebaseAuth: AngularFireAuth, private _router: Router, private apiService: ApiService) {  }
  
  signin(email: string, password: string){
    this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then((res)=>{
        sessionStorage.setItem('user', 'true');
        sessionStorage.setItem('userID', res.user?.uid?res.user?.uid:'');
        this._router.navigate(['dashboard'])
    }, err => {
        Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'email or password maybe incorrect',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  signup(email: string, password: string, username: string){
    this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then((res)=>{
        this.apiService.registerUser(email, res.user?.uid, username)
        .subscribe((res)=>{
        })
        sessionStorage.setItem('userID', res.user?.uid?res.user?.uid:'');
        sessionStorage.setItem('user', 'true');
        this._router.navigate(['dashboard'])
    }, err => {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: err.message,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  signUpWithGoogle(){
    return this.firebaseAuth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((res: any)=>{
      this.apiService.registerUser(res.user?.email, res.user?.uid, res.user?.displayName)
      .subscribe((res)=>{
      })
        this._router.navigate(['dashboard'])
        sessionStorage.setItem('userID', res.user?.uid?res.user?.uid:'');
        sessionStorage.setItem('user', 'true');
    }, err => {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: err.message,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  forgotPassword(email: string){
    this.firebaseAuth.sendPasswordResetEmail(email)
    .then(()=>{
      this._router.navigate(['verify-email'])
    }, err =>{
      alert('something went wrong')
    })
  }

  sendEmailForVerification(user: any){
    user.sendEmailVarification().then((res: any)=>{
      this._router.navigate(['/verify-email'])
    }, (err: any) =>{
      alert('something went wrong')
    })
  }

  logout(){
    this.firebaseAuth.signOut()
    this._router.navigate(['/sign-in'])
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('userID')
  }
}


