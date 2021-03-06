import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  serverElements = [{type: 'server', name: 'TestServer', content: 'Some content'}];

    onServerAdded(serverData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
  ngOnInit(): void {

  }
 onChangeFirst(){
   this.serverElements[0].name = 'Changed!';
 }
 onDestroyFirst() {
     this.serverElements.splice(0, 1);
 }
}
