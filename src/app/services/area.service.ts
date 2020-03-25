import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Catalogo   } from './Catalogo';
import { areas } from './area.json.js';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
s
  constructor() { }

  getCatalgo(): Observable<Catalogo[]>{
    return of(areas);
  }
}