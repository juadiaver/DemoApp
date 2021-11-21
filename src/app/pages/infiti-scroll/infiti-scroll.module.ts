import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfitiScrollPageRoutingModule } from './infiti-scroll-routing.module';

import { InfitiScrollPage } from './infiti-scroll.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfitiScrollPageRoutingModule,
    ComponentesModule,
    PipesModule
  ],
  
  declarations: [InfitiScrollPage]
})
export class InfitiScrollPageModule {}
