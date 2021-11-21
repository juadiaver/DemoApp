import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, IonList, ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/peliculas';
import { MensajesService } from 'src/app/services/mensajes.service';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { DetallePeliculaPage } from '../detalle-pelicula/detalle-pelicula.page';


@Component({
  selector: 'app-infiti-scroll',
  templateUrl: './infiti-scroll.page.html',
  styleUrls: ['./infiti-scroll.page.scss'],
})
export class InfitiScrollPage implements OnInit {

  @ViewChild('miInfinite') infinite: IonInfiniteScroll
  @ViewChild('miList') miList: IonList

  constructor(private _peliculasService: PeliculasService,
    private _mensajeService: MensajesService,
    private _modalController: ModalController,
    private _router:Router) { }
    public datos: Pelicula[] = [];
    public numPage: number = 1;
    public filtraPor: string = '';
  ngOnInit() {
    this.loadData(null);
  }
  filtrar(ev: any) {
    this.filtraPor = ev.detail.value;
  };

  veAPelicula(item: Pelicula) {
    this._peliculasService.peliculaActual=item;
    this._router.navigate(['ficha-pelicula'])
  }

  async muestraInfoPelicula(peli: Pelicula) {

    this.miList.closeSlidingItems();
    const modal = await this._modalController.create({
      component: DetallePeliculaPage,
      componentProps: {
        'titulo': peli.title,
        'pelicula': {
          adult: peli.adult,
          backdrop_path: peli.backdrop_path,
          genre_ids: peli.genre_ids,
          id: peli.id,
          original_language: peli.original_language,
          original_title: peli.original_title,
          overview: peli.overview,
          popularity: peli.popularity,
          poster_path: peli.poster_path,
          release_date: peli.release_date,
          title: peli.title,
          video: peli.video,
          vote_average: peli.vote_average,
          vote_count: peli.vote_count,
        }
      }

    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      peli.title = data.titulo;
      peli.vote_average = Math.floor(data.pelicula.vote_average * 100) / 100;
      peli.vote_count = data.pelicula.vote_count;
    }
    console.log(data);
  }

  async loadData(ev: any) {
    await this._mensajeService.muestraLoading();
    try {
      const datosNuevos = await this._peliculasService.getPeliculasPorGenero('28', this.numPage);
      this.datos.push(...datosNuevos);

    } catch {
      await this._mensajeService.muestraMensaje('error recogiendo los datos');

    } finally {
      await this._mensajeService.paraLoading();
    }
    if (ev) {
      this.infinite.complete();
      this.numPage++;
    }
  }
}
