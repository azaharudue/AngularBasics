import { ContentChild, ElementRef } from '@angular/core';
import { 
  AfterContentInit,
  AfterViewInit,
  Component, 
  DoCheck, 
  Input,
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges,
  ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
 OnInit,
 OnChanges, 
 DoCheck, 
 AfterContentInit,
 AfterViewInit, 
 OnDestroy {
  @Input() element:{type: string, name: string, content: string};
  @Input() name;
  @ViewChild('heading',{static: true}) header: ElementRef;
  @ContentChild('paramtext',{static:true}) paragrapghText:ElementRef;

  constructor() {
    console.log('Constructor called');
    
   }
   ngOnChanges(changes: SimpleChanges){
    console.log('simple changes too!');
    console.log(changes);
   }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text content: '+ this.header.nativeElement.textContent);
    console.log('Text content of paragraph: '+ this.paragrapghText.nativeElement.textContent);
    
    

  }
  ngDoCheck(): void { 
    console.log('checked!');   
  }
  ngAfterViewInit(): void { 
    console.log('Ng afterView Init called!');
    console.log('Text content: '+ this.header.nativeElement.textContent);
        
  }
  ngAfterContentInit(): void {  
    console.log('After content init called!');
    console.log('Text content of paragraph: '+ this.paragrapghText.nativeElement.textContent);

    
   }
  ngOnDestroy(){
    console.log('ng onDestroy called');
    
  }
}
