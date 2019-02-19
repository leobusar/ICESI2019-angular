import { Component, OnInit } from '@angular/core';
import { Libro } from  '../models/libro';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libroSelected :Libro;
  libros :Libro[];

  constructor(private libroService: LibroService) {
   }

  ngOnInit() {
    this.libroSelected = new Libro;
    this.libros = this.libroService.getLibros();
  }

  mostrarDetalle(libro: Libro){
    this.libroSelected = libro;
  }

  onSave( libro: Libro){
    if (!libro.id){
      libro.id=Math.floor(Math.random()*200)+10;
      this.libros.push(libro);
    }
  }

  eliminar(libro: Libro){
    let index =  this.libros.findIndex( (libroTmp) => {return libro.id === libroTmp.id} );
    this.libros.splice(index, 1);
  }

}
