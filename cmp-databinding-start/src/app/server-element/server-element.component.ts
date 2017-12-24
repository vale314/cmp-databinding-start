import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //esta inizializado para que tipo de datos va ha recibir

  @Input()  element : {type: string, name: string, content: string}
  //contentChild olo toma todo el contenido de la etiqueta donde o insertaste
  //y sus etiquetas
  //ElementRef
  @ContentChild('content') content: ElementRef
  //input esta listo para recibir en este elemento


  constructor() { }

  ngOnInit() {
    console.log(this.content)
  }

}
