import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/componente';
import { ComponentesService } from 'src/app/services/componentes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private _datos:ComponentesService) { }
  public misComponentes:Componente[]=[];
  async ngOnInit() {
    this.misComponentes=await this._datos.getComponentes();
  }

  
  
}
