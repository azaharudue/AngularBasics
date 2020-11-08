import { Component, OnInit } from '@angular/core';

type number0 = number;

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
  // styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() { }
  
  onChangeStatus(){
    this.serverStatus = 'online';
  }

}
