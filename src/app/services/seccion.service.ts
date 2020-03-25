import { Injectable } from '@angular/core';
import { secciones  } from './seccion.json.js';
import { Catalogo   } from './Catalogo';
import { Observable } from 'rxjs';
import { of         } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  constructor() { }

  getCatalgo(): Observable<Catalogo[]>{
    return of(secciones);
  }
}
