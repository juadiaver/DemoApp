import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertControlerCtr:AlertController) { }

  ngOnInit() {
  }

  async alertSimple() {
    const alert = await this.alertControlerCtr.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text:"Cancelar",
          handler: () => {
            console.log('Confirm Cancel');
          },
          role:"cancel"
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async alertMultiple() {
    const alert = await this.alertControlerCtr.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancelar', 'Aceptar', 'Borrar']
    });

    await alert.present();
  }
}
