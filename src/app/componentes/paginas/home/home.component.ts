import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private usuarioService : UsuarioService){}
  //TOdo
  //REQUISICAO PARA COMPLETAR CAMPOS
  
  ngOnInit(){
    this.usuarioService.buscarUnicoUsuario('').subscribe((resposta)=>{console.log(resposta)});
  }

  //ARAMZENAMENTO DE INFO
  //VERIFICACAO DE MUDANÇA DO TOKEN
}
