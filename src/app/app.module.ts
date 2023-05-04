import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColunaPerfilComponent } from './componentes/coluna-perfil/coluna-perfil.component';
import { HomeComponent } from './componentes/paginas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ColunaPerfilComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
