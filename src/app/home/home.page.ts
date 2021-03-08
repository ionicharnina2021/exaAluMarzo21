import { PaseadorService } from './../providers/paseador.service';
import { AtraccionesService } from './../providers/atracciones.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private atracciones:AtraccionesService, private paseador:PaseadorService) {}

}
