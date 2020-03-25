import { RouterModule, Routes } from '@angular/router';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { SeccionComponent } from './seccion/seccion.component';
import { AreaComponent } from './area/area.component';
import { EditarSeccionComponent } from './editar-seccion/editar-seccion.component';
import { EditarAreaComponent } from './editar-area/editar-area.component';
import { ModalEditarComponent } from './modal-editar/modal-editar.component';

const APP_ROUTES: Routes = [
  { path: 'catalogos', component: CatalogosComponent },
  { path: 'catalogos/seccion', component: SeccionComponent},
  { path: 'catalogos/area', component: AreaComponent},
  { path: 'catalogos/seccion/:id', component: EditarSeccionComponent},
  { path: 'catalogos/area/:id', component: EditarAreaComponent},
  { path: 'modal', component: ModalEditarComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
