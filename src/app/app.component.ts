import { Component } from '@angular/core';
import { CatalogosService} from './services/catalogos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion';
  // constructor(public json: CatalogosService) {
  //   this.json.getJson('/getSecciones').subscribe((res: any) => {
  //     console.log(res);
  //   });
  // }

  constructor() { }
}

