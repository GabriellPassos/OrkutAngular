import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Perfil } from 'src/app/interfaces/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Resposta } from '../../interfaces/resposta';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() onPerfilCarregado = new EventEmitter();
  public modoEdicao: boolean = false;
  public exibicaoPerfilSocial: boolean = false;
  public perfil!: Perfil;
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
  constructor(private usuarioService: UsuarioService, private router: Router) { }
  ngOnInit() {
    this.formDataPerfil = new FormData();
    this.usuarioService.buscarPerfil('').subscribe((resposta) => {
      this.perfil = resposta.data;
      this.nomePerfil = resposta.data.nomePerfil;
      this.estado = resposta.data.estado!;
      this.cidade = resposta.data.cidade!;
      this.genero = resposta.data.genero!;
      this.quemSouEu = resposta.data.quemSouEu!;
      this.livros = resposta.data.livros!;
      this.filmes = resposta.data.filmes!;
      this.aniversario = resposta.data.aniversario!;
      this.frasePerfil = resposta.data.frasePerfil!;
      this.relacionamento = resposta.data.relacionamento!;
      this.musicas = resposta.data.musicas!;
      this.onPerfilCarregado.emit();
    });

  }
  ligarModoEdicao() {
    this.modoEdicao = true;
  }
  exibirPerfilSocial() {
    console.log(this.estado)
    if (this.modoEdicao) {
      this.exibicaoPerfilSocial = true
      this.modoEdicao = false;
      return
    }
    this.exibicaoPerfilSocial = !this.exibicaoPerfilSocial;
  }

  async guadarAlteracaoRecente(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(nomeCampo => {
      this.formDataPerfil.set(nomeCampo, formGroup.value[nomeCampo]);
    });
  }
  enviarAlteracoesPerfil() {
    this.usuarioService.atualizarPerfil(this.formDataPerfil).subscribe((respsota) => { if (!respsota.error) { console.log("sim"); window.location.reload(); } });
  }
  //ARAMZENAMENTO DE INFO
  //VERIFICACAO DE MUDANÇA DO TOKEN
}
