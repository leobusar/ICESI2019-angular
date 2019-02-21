import { Injectable } from '@angular/core';
import { Libro } from  '../models/libro';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  libroCollection: AngularFirestoreCollection<Libro>;
  libros: Observable< Libro[]> ;

  constructor(private readonly db: AngularFirestore) {
    this.libroCollection = this.db.collection('libros'); 
    this.libros = this.libroCollection.valueChanges(); 
  }

  getLibros(): Observable<Libro []> {
    return  this.libros;
  }

  addLibro(libro :Libro) {
    let id;
    console.log(libro);
    if (!libro.id){
      id = this.db.createId();
    }else{
      id = libro.id;
    }
    let librotmp = {id, "name": libro.name, "author": libro.author }  
    this.libroCollection.doc(id).set(librotmp);
  }

  delLibro(libro: Libro){
    this.libroCollection.doc(libro.id).delete();
  }
}
