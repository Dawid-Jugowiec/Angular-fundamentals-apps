import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cocpit',
  templateUrl: './cocpit.component.html',
  styleUrls: ['./cocpit.component.css']
})
export class CocpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
 @ViewChild('ServerContentInput') serverContentInput:ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

 

  onAddServer(nameInput: HTMLInputElement) {
  this.serverCreated.emit({serverName: nameInput.value, 
    serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
}

}
