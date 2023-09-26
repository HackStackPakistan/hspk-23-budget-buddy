import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    const words = [
      "Hello, World!",
      "Welcome to my website!",
      "This is a typewriter effect."
    ];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
      currentWord = words[i];
      const typewriter = document.getElementById("typewriter");
      if (typewriter) {
        if (isDeleting) {
          typewriter.textContent = currentWord.substring(
            0,
            j - 1
          );
          j--;
          if (j == 0) {
            isDeleting = false;
            i++;
            if (i == words.length) {
              i = 0;
            }
          }
        } else {
          typewriter.textContent = currentWord.substring(
            0,
            j + 1
          );
          j++;
          if (j == currentWord.length) {
            isDeleting = true;
          }
        }
      } else {
        console.error("Typewriter element not found");
      }
      setTimeout(type, 100);
    }

    type();
  }
}
