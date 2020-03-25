import { Component, OnInit, Input } from '@angular/core';
import { Catalogo } from '../services/Catalogo';


@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html'
})
export class SeccionComponent implements OnInit {

  @Input()
  cata: boolean;

  ngOnInit(): void {
  }


  constructor() {  }


}
