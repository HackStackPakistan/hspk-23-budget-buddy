import { JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firebaseAuth: AngularFireAuth, private _router: Router) {  }
  
  signin(email: string, password: string){
    this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then((res)=>{
        localStorage.setItem('user', 'true');        
        this._router.navigate(['dashboard'])
        
    }, err => {
        Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'email or password maybe incorrect',
        showConfirmButton: false,
        timer: 1500
      })
        this._router.navigate(['/signin'])
    })
  }

  signup(email: string, password: string, username: string){
    this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then((res)=>{
        localStorage.setItem('user', 'true');
        console.log(res);
        
    }, err => {
        alert(err.message)
        this._router.navigate(['/signin'])
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  signUpWithGoogle(){
    this.firebaseAuth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((res)=>{
        this._router.navigate(['dashboard'])
        localStorage.setItem('user', 'true');
        console.log(res);
    }, err => {
        alert(err.message)
        this._router.navigate(['/signin'])
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
    localStorage.removeItem('user')
  }
}


