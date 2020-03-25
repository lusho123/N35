import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Catalogo } from '../services/Catalogo';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-seccion',
  templateUrl: './form-seccion.component.html'
})
export class FormSeccionComponent implements OnInit {

  // secciones: Catalogo[];
  @Output()
  cat: EventEmitter<boolean> = new EventEmitter<boolean>();

  descripcion: string;
  idUsuario: number;
  estatus: number;
  url: string;
  formulario: FormGroup;

  constructor(private apiService: ApiService) { 
    this.formulario = this.crearFormulario();
    this.descripcion = '';
    this.idUsuario = 1;
    this.estatus = 1;
    this.url = 'http://localhost:4000/api/postSeccion';
  }

  ngOnInit() {
  }

  crearFormulario() {
    return new FormGroup({
      descripcion: new FormControl('', [
        Validators.required, 
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.pattern('[a-zA-Z0-9-_]{1,10}')
      ])
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

    if (this.formulario.valid) {
      this.apiService.postCatalogo(this.url, descripcion).subscribe(
        // Si todo es correcto envio el mensaje, actualizo la tabla y limpio el formulario
        res => {
          if (res) {
            this.actualizar(true);
            Swal.fire('Correcto', 'Se ha creado el Catálogo', 'success');
            this.limpiarFormulario();
          }
        },
        error => {
          Swal.fire('Error', 'No se agregó el Catálogo', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Descripción no valida', 'error');
    }
  }
  
}
