import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoSeccionComponent } from './seccion/catalogo-seccion/catalogo-seccion.component';
import { CatalogoAreaComponent } from './area/catalogo-area/catalogo-area.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { FormSeccionComponent } from './seccion/form-seccion/form-seccion.component';
import { TablaSeccionComponent } from './seccion/tabla-seccion/tabla-seccion.component';
import { EditarSeccionComponent } from './seccion/editar-seccion/editar-seccion.component';
import { FiltrarSeccionComponent } from './seccion/filtrar-seccion/filtrar-seccion.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoSeccionComponent,
    CatalogoAreaComponent,
    CatalogosComponent,
    FormSeccionComponent,
    TablaSeccionComponent,
    EditarSeccionComponent,
    FiltrarSeccionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
