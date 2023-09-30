import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'frontend';

  isSignedIn = 'false';
  constructor() {}

  ngOnInit(){
    // this.isSignedIn = localStorage.getItem('token');
  }

}
