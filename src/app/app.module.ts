import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importa rutas
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
import{RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { VistaHomeComponent } from './component/vista-home/vista-home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
//pipes

// Pipes
//inporta services
import { InformacionService } from './services/informacion.service';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VistaArtistaComponent } from './component/vista-artista/vista-artista.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaHomeComponent,
    NavbarComponent,
    VistaArtistaComponent,
  
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(ROUTES,{useHash: true}),
    BrowserAnimationsModule,
  ],
  providers: [
    InformacionService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
