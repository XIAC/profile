import { Component, OnInit } from '@angular/core';
import { Persona } from './shared/persona.model';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  persona: Persona;
  listaPersona: Persona[] = [];
  constructor() {
    this.inicializar();

  }

  ngOnInit() {
  }
  enviar() {
    console.log(this.persona);
    // this.persona = new Persona();

    this.listaPersona.push(this.persona);

    console.log(this.listaPersona);
    this.inicializar();
    // this.listaPersona.forEach(element => {
    //     console.log(element)
    // });
  }
  inicializar() {
    this.persona = new Persona();
  }
}
