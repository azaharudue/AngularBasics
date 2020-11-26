import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddnumbers: number[] = [];
  evennumbers: number[] = [];
 // tslint:disable-next-line: typedef
 onGameStarted(gameTime: number ){
  console.log('Also time is shown from app component ' + gameTime + 'sec' );
  if (gameTime % 2 === 0){
    this.evennumbers.push(gameTime);
  }
    else{
      this.oddnumbers.push(gameTime);
    }


 }
}
