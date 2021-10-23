import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  @ViewChild('miRefresher') refresher:IonRefresher
  @ViewChild('miInfinite') infinite:IonInfiniteScroll
  constructor(private _mensajeService: MensajesService) { }
  public datos= Array(20);
  ngOnInit() {
  }

  onClick() {
    this._mensajeService.muestraMensaje("Conectado",1000)
  }

  refresca() {
    setTimeout(() => {
      let nuevosDatos= Array(10);
      this.datos.push(...nuevosDatos);
      this.refresher.complete();
    }, 1500);
  }

  loadData(){
    setTimeout(() => {
      if(this.datos.length>70){
        this.infinite.complete();
        this.refresher.disabled = true;
        return;
      }
      let nuevosDatos= Array(10);
      this.datos.push(...nuevosDatos);
      this.infinite.complete();
    }, 1500);
  }
}
