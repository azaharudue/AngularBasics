import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = false;
  numbers = [];
  dateEntry =[];
  onClickToggle(){
    this.showContent = !this.showContent;
    this.numbers.push(this.numbers.length + 1);
  }  
  onClickDisplayDate(){
    this.dateEntry.push(new Date());
  }
}
