import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Boton } from 'src/app/interfaces/boton';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }


  public botones: Boton[] = [

    {
      nombre: 'Alert',
      numero: 1,
      color: 'primary'
    },
    {
      nombre: 'ALert multiple',
      numero: 2,
      color: 'secondary'
    },
    {
      nombre: 'Aler confirm',
      numero: 3,
      color: 'butano'
    },
    {
      nombre: 'Alert prompt',
      numero: 4,
      color: 'success'
    },
    {
      nombre: 'Alert radio',
      numero: 5,
      color: 'cesped'
    },
    {
      nombre: 'Alert checkbox',
      numero: 6,
      color: 'danger'
    },


  ]

  onclick(numero) {
    switch (numero) {

      case 1:
        this.presentAlert();
        break;
      case 2:
        this.alertMultiple();
        break;
      case 3:
        this.presentAlertConfirm();
        break;
      case 4:
        this.presentAlertPrompt();
        break;
      case 5:
        this.presentAlertRadio();
        break;
      case 6:
        this.presentAlertCheckbox()
        break;
      
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Esto es una alerta ',
      message: 'Pulse ok para salir de aqui',
      buttons: ['OK']
    });

    await alert.present();
  }


  async alertMultiple() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert multiple',
      subHeader: 'Esto es una alerta multiple',
      message: 'Pulse uno de las siguientes opciones',
      buttons: ['Aceptar', 'Cancelar', 'Borrar']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerte de confirmacion',
      message: 'Debes <strong>confirmar</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta Prompt',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Escibre aqui...'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'Valor por defecto',
          placeholder: 'Escibre aqui...'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Escibre aqui... es un textarea'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Sitio web'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Introduce tu contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert radio',
      inputs: [
        {
          name: 'Bicicleta',
          type: 'radio',
          label: 'Bicicleta',
          value: 'Bicicleta',
          handler: () => {
            console.log('Bicicleta para viajar');
          },
          checked: true
        },
        {
          name: 'Coche',
          type: 'radio',
          label: 'Coche',
          value: 'Coche',
          handler: () => {
            console.log('Coche para viajar');
          }
        },
        {
          name: 'Moto',
          type: 'radio',
          label: 'Moto',
          value: 'Moto',
          handler: () => {
            console.log('Radio para viajar');
          }
        },
        {
          name: 'Quad',
          type: 'radio',
          label: 'Moto',
          value: 'Moto',
          handler: () => {
            console.log('Moto para viajar');
          }
        }
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Animales',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Perros',
          value: 'Perros',
          handler: () => {
            console.log('Perros seleccionado');
          },
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Gatos',
          value: 'Gatos',
          handler: () => {
            console.log('Gatos seleccionado');
          }
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Pajaros',
          value: 'Pajaros',
          handler: () => {
            console.log('Pajaros seleccionado');
          }
        }

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
