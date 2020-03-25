import { Component, OnInit, Output, Input } from '@angular/core';
import { Catalogo } from '../services/Catalogo';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tabla-area',
  templateUrl: './tabla-area.component.html'
})
export class TablaAreaComponent implements OnInit {

  @Input()
  set cat(c: boolean) {
    if (c) {
      this.obtenerCatalogos();
    }
  }

  actualiza: boolean;
  catalogo: Catalogo[];
  tipo: string;
  urlDeleteCatalogo = 'http://localhost:8080/api/deleteArea';
  urlGetCatalogos = 'http://localhost:8080/api/getAreas';

  constructor(private apiService: ApiService) {
    this.tipo = 'Sección';
  }

  ngOnInit(): void {
    this.obtenerCatalogos();
  }

  obtenerCatalogos() {
    this.apiService.getCatalogos(this.urlGetCatalogos).subscribe(
      res => this.catalogo = res
    );
   }

  editarCatalogo(identificador: number) {
    Swal.fire({
      title: 'Modificar Catálogo',
      text: 'Escribe tu nueva descripcion',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      confirmButtonText: 'Modificar',
      preConfirm: (descripcion) => {
        return descripcion;
      }
    }).then((result) => {
      if (result.value) {
        Swal.fire('El Catalogo se ha modificado', '', 'success')
      }
    });
  }

  eliminarCatalogo(identificador: string) {
    const url = `${this.urlDeleteCatalogo}/${identificador}`;
    console.log(url);
    
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
        this.apiService.deleteCatalogo(url).subscribe(
          res => {
            Swal.fire('El Catalogo ha sido eliminado', '', 'success');
            this.obtenerCatalogos();
          },
          error => {
            Swal.fire('No se elimino el catalogo', '', 'error');
          }
        );
      }
    });
  }

}