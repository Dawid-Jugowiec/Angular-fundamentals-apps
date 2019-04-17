import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name:string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log("constructor called");
  }

  ngOnChanges(changes:SimpleChanges) {
   
    console.log("ngOnChangesCalled");
    
  }

  ngOnInit() {
    console.log("ngOnInitCalled");
    console.log("Text content: "+ this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheckCalled");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInitCalled");
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);


  }

  ngAfterContentChecked(){
    console.log("ngAfterContentCheckedCalled");

  }

  ngAfterViewInit(){
    console.log("Text content: "+ this.header.nativeElement.textContent)

    console.log("ngAfterViewInitCalled");

  }

  ngAfterViewChecked(){
    console.log("ngAfterViewCheckedCalled");

  }

  ngOnDestroy() {
    console.log("ngOnDestroyCalled");
  }
}
