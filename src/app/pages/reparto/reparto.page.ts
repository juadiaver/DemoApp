import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/interfaces/actores';
import { Pelicula } from 'src/app/interfaces/peliculas';
import { MensajesService } from 'src/app/services/mensajes.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-reparto',
  templateUrl: './reparto.page.html',
  styleUrls: ['./reparto.page.scss'],
})
export class RepartoPage implements OnInit {
  public pelicula:Pelicula;
  public actores:Actor[];
  constructor(private _peliculaService:PeliculasService,
    private _mensajeService:MensajesService,
    private _router:Router) { }

  async ngOnInit() {
    if(!this._peliculaService.peliculaActual){
      this._router.navigate(['inicio'])
    }
    this.pelicula=this._peliculaService.peliculaActual;
    
    try {
      this.actores= await this._peliculaService.getActores(this.pelicula.id);
      console.log(this.actores);

    } catch {
      await this._mensajeService.muestraMensaje('error recogiendo los datos');

    } finally {
      await this._mensajeService.paraLoading();
    }
  }

}
