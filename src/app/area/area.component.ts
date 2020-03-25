import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html'
})
export class AreaComponent implements OnInit {

  @Input()
  cata: boolean;

  constructor() { }

  ngOnInit() {
  }

}
