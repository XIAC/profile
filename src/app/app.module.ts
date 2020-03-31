import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { PersonaComponent } from './persona/persona.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DropdownModule } from 'ngx-dropdown';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DestacarpalabraDirective } from './recursos/destacarpalabra.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    PersonaComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    DestacarpalabraDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
