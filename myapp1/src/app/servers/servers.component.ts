import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})  
export class ServersComponent{

  allowNewServer = false;
  serverName  = '';
  serverCreationStatus = 'No server was created!';

  constructor (){
    setTimeout(() =>{this.allowNewServer = true;
    },2000);
  }
  onCreateServer(){
    this.serverCreationStatus= 'Server created!'+'  name is :'+this.serverName;
    
  }
  onUpdateServerName(event: any){
  this.serverName = (<HTMLInputElement>event.target).value;
  }
}
