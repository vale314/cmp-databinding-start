import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-cock',
  templateUrl: './cock.component.html',
  styleUrls: ['./cock.component.css']
})
export class CockComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>() ;
  @Output() blueprintData = new EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName = '';
  newServerContent = '';
  //observ♠ un ojecto del dom lo guarda en una varible y es de tipo Elemetn
  @ViewChild('serverNameContenerInput') serverNameContenerInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }
  
  onAddServer(nameServerInput) {
    //otra forma de pasar los valores pero por id del objeto
    
    this.serverCreated.emit({
      serverName:nameServerInput.value,
      serverContent:this.serverNameContenerInput.nativeElement.value
    })
    
  }

  onAddBlueprint(nameServerInput) {
    this.blueprintData.emit({
      serverName:nameServerInput.value,
      serverContent:this.serverNameContenerInput.nativeElement.value
    })
  }
}
