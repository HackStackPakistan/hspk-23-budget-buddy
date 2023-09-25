import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
    constructor(public firebaseAuth: FirebaseService) {}

    forgotPass(email: string) {
    this.firebaseAuth.forgotPassword(email)
    }

}
