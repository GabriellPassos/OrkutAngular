import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { RecadosComponent } from './componentes/paginas/recados/recados.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'recados', component:RecadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
