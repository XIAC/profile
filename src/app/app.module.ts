import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { PersonaComponent } from './persona/persona.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DropdownModule } from 'ngx-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    PersonaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
