import { Component, OnInit } from '@angular/core';

type number0 = number;

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
  // styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId:number = 10;
  serverStatus:string = 'offline';

  constructor() { 
    this.serverStatus = Math.random()> 0.5 ? 'online' : 'offline';
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus ==='online'?'green':'red';

  }

}
