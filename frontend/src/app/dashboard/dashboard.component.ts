import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public firebaseService: FirebaseService, private _router: Router) {
  }
  date = new Date();
  logOut(){
    this.firebaseService.logout()
  }

}
