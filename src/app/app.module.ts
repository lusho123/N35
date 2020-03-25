import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// -> Servicios
import { SeccionService } from './services/seccion.service';

// -> Rutas
import { APP_ROUTING } from './app.routes';

// -> Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SeccionComponent } from './seccion/seccion.component';
import { FormSeccionComponent } from './form-seccion/form-seccion.component';
import { TablaSeccionComponent } from './tabla-seccion/tabla-seccion.component';
import { FormAreaComponent } from './form-area/form-area.component';
import { TablaAreaComponent } from './tabla-area/tabla-area.component';
import { AreaComponent } from './area/area.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { FooterComponent } from './footer/footer.component';
import { EditarSeccionComponent } from './editar-seccion/editar-seccion.component';
import { EditarAreaComponent } from './editar-area/editar-area.component';
import { ModalEditarComponent } from './modal-editar/modal-editar.component';
import { BusquedaSeccionComponent } from './busqueda-seccion/busqueda-seccion.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogosComponent,
    SeccionComponent,
    MenuComponent,
    FormSeccionComponent,
    TablaSeccionComponent,
    FormAreaComponent,
    TablaAreaComponent,
    AreaComponent,
    FooterComponent,
    EditarSeccionComponent,
    EditarAreaComponent,
    ModalEditarComponent,
    BusquedaSeccionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    // NgbModule

  ],
  providers: [
    SeccionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
