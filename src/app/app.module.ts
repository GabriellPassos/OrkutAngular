import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColunaPerfilComponent } from './componentes/coluna-perfil/coluna-perfil.component';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { CaixaAmizadesComponent } from './componentes/caixa-amizades/caixa-amizades.component';
import { PerfilInfoComponent } from './componentes/perfil-info/perfil-info.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RecadosComponent } from './componentes/paginas/recados/recados.component';
import { FormMensagemComponent } from './componentes/form-mensagem/form-mensagem.component';
import { AlbumComponent } from './componentes/paginas/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    ColunaPerfilComponent,
    HomeComponent,
    CaixaAmizadesComponent,
    PerfilInfoComponent,
    NavbarComponent,
    RecadosComponent,
    FormMensagemComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
