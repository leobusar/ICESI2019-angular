import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Libro } from  '../models/libro';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit {

  @Input() libro: Libro;
  @Output() guardar = new EventEmitter<Libro>();

  constructor() { }

  ngOnInit() {
  }

  onGuardar(libro: Libro) {
    if(libro.name && libro.author){
      this.guardar.emit(libro);
      this.reset();
    }
  }

  reset(){
    this.libro = new Libro ();
  }

}
