import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {
  }

  async muestra() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      //backdropDismiss: false,
      //mode:'ios',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      },  
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const  {role}  = await actionSheet.onDidDismiss();
    console.log('Datos que devuelve', role);
  }

}
