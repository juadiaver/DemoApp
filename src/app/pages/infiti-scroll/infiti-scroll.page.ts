import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-infiti-scroll',
  templateUrl: './infiti-scroll.page.html',
  styleUrls: ['./infiti-scroll.page.scss'],
})
export class InfitiScrollPage implements OnInit {

  @ViewChild('miInfinite') infinite:IonInfiniteScroll
  @ViewChild('miRefresher') refresher:IonRefresher
  constructor() { }
  public datos= Array(20);
  ngOnInit() {
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
