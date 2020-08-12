import { Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  ContentChild,
  ElementRef
     } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges ,DoCheck,AfterContentInit {
@Input('srvElement')  element:{type:string, name:string, content:string };
@ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    // console.log('constructor called!');
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges called');
    console.log(changes);
   }
   ngOnInit(): void {
    console.log('ngOninit called!');
    // console.log('Content of paragraph: '+this.paragraph.nativeElement.textContent);
  }
   ngDoCheck(){
     console.log("ngdocheck called");
   }

  ngAfterContentInit(){
    console.log("ngcontentinit called");
    console.log('Content of paragraph: '+this.paragraph.nativeElement.textContent);
  }

}
