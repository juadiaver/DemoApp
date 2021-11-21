import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/interfaces/peliculas';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.page.html',
  styleUrls: ['./descripcion.page.scss'],
})
export class DescripcionPage implements OnInit {
  public pelicula:Pelicula;
  constructor(private _peliculasService: PeliculasService,
    private _router: Router) { }

  ngOnInit() {
    if(!this._peliculasService.peliculaActual){
      this._router.navigate(['inicio'])
    }
    this.pelicula=this._peliculasService.peliculaActual;
  }

}
