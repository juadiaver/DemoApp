import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfitiScrollPageRoutingModule } from './infiti-scroll-routing.module';

import { InfitiScrollPage } from './infiti-scroll.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfitiScrollPageRoutingModule,
    ComponentesModule
  ],
  declarations: [InfitiScrollPage]
})
export class InfitiScrollPageModule {}
