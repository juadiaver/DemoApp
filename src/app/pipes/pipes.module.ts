import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrarPipe } from './filtrar.pipe';



@NgModule({
  declarations: [
    FiltrarPipe
  ],
  exports: [
    FiltrarPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
