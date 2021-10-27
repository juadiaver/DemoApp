import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-ion-refresher',
  templateUrl: './ion-refresher.page.html',
  styleUrls: ['./ion-refresher.page.scss'],
})
export class IonRefresherPage implements OnInit {

  @ViewChild('miRefresher') refresher:IonRefresher
  constructor() { }

  public datos:string[] = [];

  ngOnInit() {
  }

  refresca(ev) {

    setTimeout(() => {
      this.datos.push("asd");
      this.datos.push("asd");
      this.datos.push("asd");
      this.datos.push("asd");
      this.refresher.complete();
    }, 2000);
  }
}
