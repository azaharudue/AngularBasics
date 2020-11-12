import { OnDestroy } from '@angular/core';
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
OnInit, OnDestroy {
  @Output() started = new EventEmitter<number>();
  // tslint:disable-next-line: no-output-native
  @Output() ended = new EventEmitter<number>();
  interval;
  counter = 0;
  constructor() {
   }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  onStartGame(){
  // tslint:disable-next-line: no-unused-expression
  this.interval = setInterval(() => {
    this.started.emit(this.counter + 1);
    this.counter++;
    // console.log('Game Running since:'+this.counter +'sec');

  }, 1000);

  }
  // tslint:disable-next-line: typedef
  onStopGame(){
    clearInterval(this.interval);
  }
}
