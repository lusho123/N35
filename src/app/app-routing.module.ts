import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { CatalogoAreaComponent } from './area/catalogo-area/catalogo-area.component';
import { CatalogoSeccionComponent } from './seccion/catalogo-seccion/catalogo-seccion.component';


const routes: Routes = [
  { path: 'catalogos', component: CatalogosComponent },
  { path: 'catalogos/seccion', component: CatalogoSeccionComponent},
  { path: 'catalogos/area', component: CatalogoAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
