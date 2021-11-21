
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.page.html',
  styleUrls: ['./detalle-pelicula.page.scss'],
})
export class DetallePeliculaPage implements OnInit {

  constructor(private _modalController: ModalController) { }

  @Input() titulo: string;
  @Input() pelicula: Pelicula;
  public puntuacion: number = 5;
  ngOnInit() {
    console.log(this.pelicula)
  }

  cerrar() {
    this._modalController.dismiss()
  }

  cambiaPuntuacion(event: any) {
    this.puntuacion = event.detail.value;


  }

  guardarCambios(deVerdad: boolean) {
    if (!deVerdad) {
      this._modalController.dismiss();
      console.log('Sin cambios')
    } else {
      let puntuacioTotal = this.pelicula.vote_average * this.pelicula.vote_count;
      let veces = this.pelicula.vote_count + 1;
      let nuevaPuntuacion = (puntuacioTotal + this.puntuacion) / veces;
      this.pelicula.vote_average = nuevaPuntuacion;
      this.pelicula.vote_count = veces;
      console.log('Con cambios');
      this._modalController.dismiss({

        titulo: this.titulo,
        pelicula: this.pelicula
      });
    }
  }

  cambiaTitulo(ev: any) {
    this.titulo = ev.detail.value;
    this.pelicula.title = ev.detail.value;
  }

}
