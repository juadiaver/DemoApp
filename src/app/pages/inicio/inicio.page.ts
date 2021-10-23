import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/componente';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public misComponentes:Componente[]=[
    {
      nombre:"Action-sheet",
      ruta:"/action-sheet",
      icono:"trash",
      color:"primary"
    },
    {
      nombre:"Alert",
      ruta:"/alert",
      icono:"add",
      color:"success"
    },
    {
      nombre:"Usuarios",
      ruta:"/usuarios",
      icono:"person-circle-outline",
      color:"danger"
      
    },
    
  ]
  
}
