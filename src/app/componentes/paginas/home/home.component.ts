import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/interfaces/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public modoEdicao: boolean = false;
  public exibicaoPerfilSocial: boolean = false;
  public usuario!: any;
  formDataPerfil!: FormData;
  constructor(private usuarioService: UsuarioService, private router:Router) { }
  ngOnInit() {
    this.formDataPerfil = new FormData();
    this.buscarPerfil();
  }
  buscarPerfil(){
    this.usuarioService.buscarPerfil('').subscribe({
      next:(resposta) =>{
        if(resposta.data.perfi.fotoPerfil){
          resposta.data.perfi.fotoPerfil = environment.baseFotoApiUrl + resposta.data.perfi.fotoPerfil;
        }
        if(!resposta.error){ 
          this.usuario = resposta.data;
          return;
        }
      },
      error:(err)=>{this.router.navigate(['autenticacao']);
    }
    });
  }
  ligarModoEdicao() {

    this.modoEdicao = true;
  }
  async guadarAlteracaoRecente(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(nomeCampo => {
      this.formDataPerfil.set(nomeCampo, formGroup.value[nomeCampo]);
    });
  }
  enviarAlteracoesPerfil() {
    this.usuarioService.atualizarPerfil(this.formDataPerfil).subscribe((respsota) => { if (!respsota.error) { window.location.reload(); } });
  }
  anexarFotoPerfil(imagem: any) {
    this.formDataPerfil.set('fotoPerfil', imagem);
  }
}
