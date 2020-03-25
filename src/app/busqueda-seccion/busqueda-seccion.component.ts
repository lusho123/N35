import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Catalogo } from '../services/Catalogo';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-busqueda-seccion',
  templateUrl: './busqueda-seccion.component.html',
  styleUrls: ['./busqueda-seccion.component.css']
})
export class BusquedaSeccionComponent implements OnInit {

  catalogo: Catalogo[];
  formulario: FormGroup;
  url: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  crearFormulario() {
    return new FormGroup({
      descripcion: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      fechaAlta: new FormControl(),
      fechaModificacion: new FormControl(),
      idCatEstatus: new FormControl()
    });
  }

  buscar() {
    let parametros;
    if (this.formulario.valid) {
      parametros = {
        descripcion: this.formulario.value.descripcion, 
        fechaAlta: this.formulario.value.fechaAlta, 
        fechaModificacion: this.formulario.value.fechaModificacion, 
        idCatEstatus: this.formulario.value.idCatEstatus
      };

      this.apiService.getCatalogosBusqueda(this.url, parametros).subscribe(
        res => console.log(res)
      );
    }
  }

}

