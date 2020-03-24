import { Component, ViewChild } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';

@Component({
  selector: 'app-ximena',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';
  test: string;
  @ViewChild(PersonaComponent, {static: false}) personacomponent : PersonaComponent;

  /**
   *
   */
  constructor() {
    // this.test= "";
  }
  guardar() {
    // console.log("este boton guarda");
    console.log("este boton es de app component");
    console.log(this.personacomponent.retornarPerson());
  }
}
