import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput',{static: true}) serverContentInput : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverNameInput : HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({serverName: serverNameInput.value,
    serverContent: this.serverContentInput.nativeElement.value
  });
  }

  onAddBlueprint(serverNameInput : HTMLInputElement) {
    console.log(serverNameInput.value);
    this.blueprintCreated.emit({serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}