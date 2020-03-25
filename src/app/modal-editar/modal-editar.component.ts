import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {

  bandera = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redireccion() {
    console.log('ahi');
    this.router.navigate(['/modal']);
  }

}
