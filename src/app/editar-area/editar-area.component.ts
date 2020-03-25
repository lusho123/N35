import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../services/Catalogo';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-Area',
  templateUrl: './editar-Area.component.html'
})
export class EditarAreaComponent implements OnInit {

  private urlCatalogo: string;
  private urlModificar: string;
  private urlParcial: string;
  private idCat: number;
  private bandera: boolean;
  catalogo: Catalogo;
  fecha: string;
  id: number;
  formulario: FormGroup;


  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { 
    this.formulario = this.crearFormulario();
  }

  ngOnInit() {
    const date = new Date();
    this.idCat = this.activatedRoute.snapshot.params.id;
    this.urlCatalogo = 'http://localhost:8080/api/getArea/' + this.idCat;
    this.urlModificar = 'http://localhost:8080/api/putArea/' + this.idCat;
    this.urlParcial = 'http://localhost:8080/api/patchArea/' + this.idCat;
    this.obtenerCatalogo();
    this.fecha = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '/'
               + (date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()) + '/'
               + date.getFullYear() + ' ';
    this.id = 1;
    this.bandera = false;
  }

  crearFormulario() {
    return new FormGroup({
      descripcion: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)])
    });
  }

  obtenerCatalogo() {
    this.apiService.getCatalogo(this.urlCatalogo).subscribe(
      res => {
        this.catalogo = res;
      },
      error => {
        console.log('error');
      }
    );
  }

  cambiarEstatus() {
    if (this.catalogo.idCatEstatus) {
      this.catalogo.idCatEstatus--;
    } else {
      this.catalogo.idCatEstatus++;
    }
    this.bandera = true;
  }

  limpiarFormulario() {
    this.formulario.reset();
  }


  modificarCatalogo() {
    if (this.formulario.value.descripcion) {
      if (this.formulario.valid) {
        this.catalogo.descripcion = this.formulario.value.descripcion;
        this.catalogo.idUsuarioModificacion = this.id;

        this.apiService.putCatalogo(this.urlModificar, this.catalogo).subscribe(
          res => {
            if (res) {
              Swal.fire('Correcto', 'Se ha modificado el Catálogo', 'success');
            } else {
              Swal.fire('Error', 'No se ha modificado el Catálogo', 'error');
            }
            this.limpiarFormulario();
            this.obtenerCatalogo();
          },
          error => {
             Swal.fire('Error', 'No se ha modificado el Catálogo', 'error');
          }
        );
      }
    } else {
      if (this.bandera) {
        console.log('entre');
        console.log(this.catalogo.idCatEstatus);

        // this.apiService.patchCatalogo(this.urlParcial, this.catalogo.idCatEstatus).subscribe(
        //   res => {
        //     Swal.fire('Correcto', 'Se ha modificado el Catálogo', 'success');
        //     this.bandera = false;
        //   },
        //   error => {
        //      Swal.fire('Error', 'No se ha modificado el Catálogo', 'error');
        //   }
        // );
      }
    }
  }

  formatoFecha(fecha: string) {
    let f;
    if (fecha) {
      f = new Date(fecha);
      fecha = (f.getDate() < 10 ? '0' + f.getDate() : f.getDate()) + '/'
            + (f.getMonth() < 10 ? '0' + f.getMonth() : f.getMonth()) + '/'
            + f.getFullYear();
    }
    return fecha;
  }
}
