import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   tab = 'recipe';
  onNavigate(otherTab: string): void {
    if (this.tab === 'recipe'){ this.tab = otherTab; }
    else {this.tab = otherTab; }
  }
}
