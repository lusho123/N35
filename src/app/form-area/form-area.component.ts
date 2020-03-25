import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Catalogo } from '../services/Catalogo';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html'
})
export class FormAreaComponent implements OnInit {


  @Output()
  cat: EventEmitter<boolean> = new EventEmitter<boolean>();

  // areas: Catalogo[];
  descripcion: string;
  idUsuario: number;
  estatus: number;
  url: string;
  formulario: FormGroup;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private apiService: ApiService) {
    this.formulario = this.crearFormulario();
    this.descripcion = '';
    this.idUsuario = 1;
    this.estatus = 1;
    this.url = 'http://localhost:8080/api/postArea';
  }

  ngOnInit() {
  }

  crearFormulario() {
    return new FormGroup({
      descripcion: new FormControl('')
    });
  }

  limpiarFormulario() {
    this.formulario.reset();
  }

  actualizar(cat: boolean) {
    this.cat.emit(cat);
  }

  crearCatalogo() {
    const descripcion: string = this.formulario.value.descripcion;
    this.actualizar(false);

    if (descripcion) {
      this.apiService.postCatalogo(this.url, descripcion).subscribe(
        // Si todo es correcto envio el mensaje, actualizo la tabla y limpio el formulario
        res => {
          if (res) {
            Swal.fire(
              'Correcto',
              'Se ha agregado el Catálogo.',
              'success'
            );
            this.actualizar(true);
            this.limpiarFormulario();
          }
        },
        error => {
          Swal.fire(
            'Error',
            'No se agregó el Catálogo.',
            'error'
          );
        }
      );
    }
  }

}
