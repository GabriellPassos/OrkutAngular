import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { RecadosComponent } from './componentes/paginas/recados/recados.component';
import { AlbumComponent } from './componentes/paginas/album/album.component';
import { AutenticacaoComponent } from './componentes/paginas/autenticacao/autenticacao.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'recados', component:RecadosComponent},
  {path: 'album', component:AlbumComponent},
  {path: 'autenticacao', component:AutenticacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
