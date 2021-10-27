import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonTabPage } from './ion-tab.page';

const routes: Routes = [
  {
    path: '',
    component: IonTabPage,
    children:[
      {
        path: 'action-sheet',
        loadChildren: () => import('../action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
      },
      {
        path: 'alert',
        loadChildren: () => import('../alert/alert.module').then( m => m.AlertPageModule)
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonTabPageRoutingModule {}
