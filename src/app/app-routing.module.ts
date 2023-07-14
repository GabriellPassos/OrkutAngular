import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { RecadosComponent } from './componentes/paginas/recados/recados.component';
import { AlbumComponent } from './componentes/paginas/album/album.component';
import { AutenticacaoComponent } from './componentes/paginas/autenticacao/autenticacao.component';
import { FotosComponent } from './componentes/paginas/fotos/fotos.component';
import { PerfilComponent } from './componentes/paginas/perfil/perfil.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', canActivate:[AuthGuard], component:HomeComponent},
  {path:'perfil', canActivate:[AuthGuard], component:PerfilComponent},
  {path:'perfil/:nomeUsuario',canActivate:[AuthGuard], component:PerfilComponent},
  {path:'recados',canActivate:[AuthGuard], component:RecadosComponent},
  {path:'recados/:nomeUsuario',canActivate:[AuthGuard], component:RecadosComponent},
  {path: 'album',canActivate:[AuthGuard], component:AlbumComponent},
  {path: 'album/:nomeUsuario',canActivate:[AuthGuard], component:AlbumComponent},
  {path: 'autenticacao', component:AutenticacaoComponent},
  {path: 'album/:nomeUsuario/:albumId',canActivate:[AuthGuard], component:FotosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
