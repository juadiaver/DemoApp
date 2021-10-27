import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfitiScrollPage } from './infiti-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfitiScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfitiScrollPageRoutingModule {}
