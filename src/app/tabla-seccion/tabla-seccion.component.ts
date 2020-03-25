import { Component, OnInit, Output, Input, NgModule } from '@angular/core';
import {  Router } from '@angular/router';
import { Catalogo } from '../services/Catalogo';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tabla-seccion',
  templateUrl: './tabla-seccion.component.html'
})
export class TablaSeccionComponent implements OnInit {

  @Input()
  set cat(c: boolean) {
    if (c) {
      this.obtenerCatalogos();
      this.editar = false;
    }
  }

  actualiza: boolean;
  catalogo: Catalogo[];
  tipo: string;
  urlDeleteCatalogo = 'http://localhost:4000/api/deleteSeccion';
  urlGetCatalogos = 'http://localhost:4000/api/getSecciones';
  ide: number;
  editar: boolean;

  // constructor(private apiService: ApiService, private router: Router, modal: NgbModal) {
  constructor(private apiService: ApiService, private router: Router) {
    this.tipo = 'Sección';
  }

  ngOnInit(): void {
    this.obtenerCatalogos();
    this.ide = 1;
  }

  obtenerCatalogos() {
    this.apiService.getCatalogos(this.urlGetCatalogos).subscribe(
      res => this.catalogo = res
    );
   }

  eliminarCatalogo(id: string) {
    Swal.fire({
      title: 'Estas seguro que deseas eliminar?',
      text: 'No podras recuperarlo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.apiService.deleteCatalogo(`${this.urlDeleteCatalogo}/${id}`).subscribe(
          res => {
            // if (res === 'success') {
              Swal.fire('El Catalogo ha sido eliminado', '', 'success');
              this.obtenerCatalogos();
            // }
          },
          error => {
            Swal.fire('No se elimino el catalogo', '', 'error');
          }
        );
      }
    });
  }

  formatoFecha(fecha: string) {
    let f: Date;
    if (fecha) {
      f = new Date(fecha);
      fecha = (f.getDate() < 10 ? '0' + f.getDate() : f.getDate()) + '/'
            + ((f.getMonth() + 1)  < 10 ? '0' + (f.getMonth() + 1) : f.getMonth() + 1 ) + '/'
            + f.getFullYear();
    }
    return fecha;
  }

  determinar(estatus: string) {
    if (estatus) {
       return "table-success";
    }
    return "table-warning";
  }

  mostrarEditar(id: number) {
    this.ide = id ;
    this.editar = true;
  }

}