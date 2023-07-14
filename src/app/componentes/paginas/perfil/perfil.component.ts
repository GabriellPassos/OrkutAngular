import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Perfil } from 'src/app/interfaces/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment.development';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Output() onPerfil = new EventEmitter();
  public modoEdicao: boolean = false;
  public exibicaoPerfilSocial: boolean = false;
  public usuario!: any;
  public nomePerfil!: string;
  public genero!: string;
  public estado!: string;
  public cidade!: string;
  public quemSouEu!: string;
  public livros!: string;
  public musicas!: string;
  public filmes!: string;
  public aniversario!: string;
  public frasePerfil!: string;
  public relacionamento!: string;
  formDataPerfil!: FormData;
  public email!: string;
  public nomeUsuario: any = '';
  public modoVisitante: boolean = false;
  constructor(private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.exibicaoPerfilSocial = true;
    this.formDataPerfil = new FormData();
    if (this.activatedRoute.snapshot.paramMap.get('nomeUsuario')) {
      this.nomeUsuario = this.activatedRoute.snapshot.paramMap.get('nomeUsuario');
    }
    this.usuarioService.buscarPerfil(this.nomeUsuario).subscribe((resposta) => {
      if(resposta.data.perfi.fotoPerfil){
        resposta.data.perfi.fotoPerfil = environment.baseFotoApiUrl + resposta.data.perfi.fotoPerfil;
      }
      this.usuario = resposta.data;
      if (this.usuario.nomeUsuario != this.nomeUsuario) {
        this.exibicaoPerfilSocial = true;
        this.modoVisitante = false
      }
      else {
        this.exibicaoPerfilSocial = false;
        this.modoVisitante = true;
      }
    });
    this.gerarPerfilTeste();
  }
  gerarPerfilTeste() {
    if (this.nomeUsuario == 'markzukerberg') {
      this.usuario = {
        "nomeUsuario": "markzukerberg",
        "email": "markzukerberg@gmail.com",
        "aniversario": "1111-11-11",
        "perfi": {
          "id": 2,
          "fotoPerfil": "assets/imagens/MarkZuckerberg.jpg",
          "nomePerfil": "Marcos Zukerberg",
          "frasePerfil": "se a versão é melhor que a original, publique a versão!",
          "genero": "masculino",
          "estado": "RO",
          "cidade": "Cabixi",
          "quemSouEu": "o pesadelo dos seus pais, prazer. amor da sua vida. ;)",
          "relacionamento": "casado(a)",
          "livros": "Facebook",
          "musicas": "Alcione - Você me vira a cabeça",
          "filmes": "Viagem ao centro da terra",
          "createdAt": "2023-07-10T20:05:14.000Z",
          "updatedAt": "2023-07-14T00:41:07.000Z",
          "usuarioId": 0
        }
      }
      return;
    }
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
