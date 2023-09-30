import { Component,  signal ,  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})
export class HomeComponent {

  isMenuOpen = signal<Boolean>(false);
  toggleMenu() {
    this.isMenuOpen = signal(!this.isMenuOpen());
  }
  ngInit(){
    console.log("home component")
  }
} 
