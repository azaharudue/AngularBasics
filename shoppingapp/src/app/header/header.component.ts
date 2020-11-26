import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector : 'app-header',
    templateUrl : './header.component.html'
})
export class HeaderComponent {
    collasped = true;
    @Output() tabClicked = new  EventEmitter<string>();
    @Output() homePageClicked = new EventEmitter<string>();
    onClick(event: string): void{
        this.tabClicked.emit(event);
    }
}
