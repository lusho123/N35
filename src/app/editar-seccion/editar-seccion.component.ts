import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Catalogo } from '../services/Catalogo';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-seccion',
  templateUrl: './editar-seccion.component.html',
  styleUrls: ['./editar-seccion.component.css']
})
export class EditarSeccionComponent implements OnInit {
  // router: any;

  @Input()
  set ide(ide: number) {
    if (ide) {
      this.id = 1
      this.urlCatalogo = 'http://localhost:4000/api/getSeccion/' + ide;
      this.urlModificar = 'http://localhost:4000/api/putSeccion/' + ide;
      // this.urlParcial = 'http://localhost:4000/api/patchSeccion/' + ide;
      this.obtenerCatalogo();
      this.bandera = false;
    }
  }

  @Output()
  cat: EventEmitter<boolean> = new EventEmitter<boolean>();

  private urlCatalogo: string;
  private urlModificar: string;
  private urlParcial: string;
  private bandera: boolean;
  catalogo: Catalogo;
  fecha: string;
  id: number;
  formulario: FormGroup;
  showModal: boolean;

 
  constructor(private apiService: ApiService, public router: Router) {
    this.formulario = this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario() {
    return new FormGroup({
      descripcion: new FormControl('', [
        Validators.required, 
        Validators.minLength(5),
        Validators.maxLength(30),
        // Validators.pattern('[a-zA-Z0-9-_]{1,10}')
      ])
    });
  }

  obtenerCatalogo() {
    this.apiService.getCatalogo(this.urlCatalogo).subscribe(
      res => {
        this.catalogo = res;
      },
      error => {
        console.log('Error al Obtener Catalogo');
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
    Swal.fire({
      title: 'Estas seguro que deseas editar catalogo?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, editar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      console.log(result.value + ' ' + this.formulario.valid);
      if (this.formulario.valid && result.value) {
          this.catalogo.descripcion = this.formulario.value.descripcion;
          this.catalogo.idUsuarioModificacion = this.id;
          this.apiService.putCatalogo(this.urlModificar, this.catalogo).subscribe(
            res => {
              // this.router.navigate();
              // this.router.navigate(['/catalogos/seccion']);
              Swal.fire('Correcto', 'Se ha modificado el Catálogo', 'success');
              this.cat.emit(true);
            },
            error => {
              Swal.fire('Error', 'No se ha modificado el Catálogo', 'error');
            }
          );
        }
    });
    // if (this.formulario.value.descripcion) {
    //   if (this.formulario.valid) {
    //     this.catalogo.descripcion = this.formulario.value.descripcion;
    //     this.catalogo.idUsuarioModificacion = this.id;
    //     this.apiService.putCatalogo(this.urlModificar, this.catalogo).subscribe(
    //       res => {
    //         // this.router.navigate();
    //         // this.router.navigate(['/catalogos/seccion']);
    //         Swal.fire('Correcto', 'Se ha modificado el Catálogo', 'success');
    //         this.cat.emit(true);
    //       },
    //       error => {
    //          Swal.fire('Error', 'No se ha modificado el Catálogo', 'error');
    //       }
    //     );
    //   }
    // } 
    // else {
    //   console.log('entre');
    //   if (this.bandera) {
    //     console.log(this.catalogo);
    //     this.catalogo.idUsuarioModificacion = this.id;
    //     this.apiService.patchCatalogo(this.urlParcial, this.catalogo).subscribe(
    //       res => {
    //         this.bandera = false;
    //         this.cat.emit(true);
    //         Swal.fire('Correcto', 'Se ha modificado el Catálogo', 'success');
    //       },
    //       error => {
    //          Swal.fire('Error', 'No se ha modificado el Catálogo', 'error');
    //       }
    //     );
    //   }
    // }

    // this.router.navigate(['/catalogos/seccion']);
  }

  getFecha(fecha: string) {
    let f: Date;
    if (fecha) {
      f = new Date(fecha);
      fecha = (f.getDate() < 10 ? '0' + f.getDate() : f.getDate()) + '/'
            + ((f.getMonth() + 1)  < 10 ? '0' + (f.getMonth() + 1) : f.getMonth() + 1 ) + '/'
            + f.getFullYear();
    } else {
      fecha = ' - ';
    }
    return fecha;
  }

  getHora(fecha: string) {
    let f: Date;
    if (fecha) {
      f = new Date(fecha);
      fecha = (f.getHours()) + ':'
            + (f.getMinutes()) + ':'
            + f.getSeconds();
    } else {
      fecha = ' - ';
    }
    return fecha;
  }

}
