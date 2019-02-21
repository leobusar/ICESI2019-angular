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
    this.libros = [];
   }

  ngOnInit() {
    this.libroSelected = new Libro;
    this.libroService.getLibros().subscribe(librosDb =>
            this.libros = librosDb
      );
  }

  mostrarDetalle(libro: Libro){
    this.libroSelected = libro;
  }

  onSave( libro: Libro){
 //   if (!libro.id){
//      libro.id=Math.floor(Math.random()*200)+10;
      this.libroService.addLibro(libro);
 //   }
  }

  eliminar(libro: Libro){
  //  let index =  this.libros.findIndex( (libroTmp) => {return libro.id === libroTmp.id} );
  //  this.libros.splice(index, 1);
    this.libroService.delLibro(libro);
  }

}
