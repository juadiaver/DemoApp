
import { Component, OnInit, ViewChild } from '@angular/core';

import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  
  constructor(private _mensajeService: MensajesService) { }
  public datos= Array(20);
  ngOnInit() {
  }

  onClick() {
    this._mensajeService.muestraMensaje("Conectado",1000)
  }

}
