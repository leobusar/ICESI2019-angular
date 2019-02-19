import { Injectable } from '@angular/core';
import { Libro } from  '../models/libro';
import { LIBROS } from '../mocks/mock-libros';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor() { }

  getLibros(): Libro[]{
    return  LIBROS;
  }
}
