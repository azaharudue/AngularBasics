 import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  } from '@angular/core';
 @Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements
OnInit{
  @Output() started = new EventEmitter<number>();
  interval;
  counter = 0;
  constructor() {
   }
  ngOnInit(): void {
  }
  onStartGame(): void{
  this.interval = setInterval(() => { this.started.emit(this.counter + 1); this.counter++; } , 1000);
  }
  onStopGame(): void{
    clearInterval(this.interval);
  }
}
