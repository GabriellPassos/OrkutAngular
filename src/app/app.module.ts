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
import { AutenticacaoComponent } from './componentes/paginas/autenticacao/autenticacao.component';
import { PopupAutenticacaoComponent } from './componentes/popup-autenticacao/popup-autenticacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './interceptors/interceptor.module';
import { PerfilSocialComponent } from './componentes/perfil-social/perfil-social.component';

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
    AlbumComponent,
    AutenticacaoComponent,
    PopupAutenticacaoComponent,
    PerfilSocialComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InterceptorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
