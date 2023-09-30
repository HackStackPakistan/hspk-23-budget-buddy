import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recieved',
  templateUrl: './recieved.component.html',
  styleUrls: ['./recieved.component.css']
})
export class RecievedComponent {

  @Input()
  Data!: string;
}
