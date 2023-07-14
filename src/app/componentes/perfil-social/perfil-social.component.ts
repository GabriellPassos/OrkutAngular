import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OutrosFetchServiceService } from 'src/app/services/uf-cidade-service.service';

@Component({
  selector: 'app-perfil-social',
  templateUrl: './perfil-social.component.html',
  styleUrls: ['./perfil-social.component.css']
})
export class PerfilSocialComponent implements OnInit {
  _modoEdicao: boolean = false;
  @Input() set modoEdicao(value: boolean) {
    this._modoEdicao = value;
    if (value) {
      this.perfilSocialForm.patchValue({ ["quemSouEu"]: this.quemSouEu });
      this.perfilSocialForm.patchValue({ ["genero"]: this.genero });
      this.perfilSocialForm.patchValue({ ["cidade"]: this.cidade });
      this.perfilSocialForm.patchValue({ ["estado"]: this.estado });
      this.perfilSocialForm.patchValue({ ["livros"]: this.livros });
      this.perfilSocialForm.patchValue({ ["relacionamento"]: this.relacionamento });
      this.perfilSocialForm.patchValue({ ["musicas"]: this.musicas });
      this.perfilSocialForm.patchValue({ ["filmes"]: this.filmes });
    }
  }
  get modoEdicao(): boolean {
    return this._modoEdicao;
  }
  @Output() onGuardarAlteracao = new EventEmitter();
  public ufs: any;
  public cidades: any;
  public cidade?: string;
  public estado?: string;
  public genero?: string;
  public aniversario?: string;
  public quemSouEu?: string;
  public relacionamento?: string;
  public livros?: string;
  public musicas?: string;
  public filmes?: string;
  public perfilSocialForm!: FormGroup;
  public _usuario: any;
  @Input() set usuario(value: any) {
    if (value) {
      this._usuario = value;
      this.genero = this._usuario.perfi.genero;
      this.relacionamento = this._usuario.perfi.relacionamento;
      this.estado = this._usuario.perfi.estado;
      this.cidade = this._usuario.perfi.cidade;
      this.aniversario = this._usuario.aniversario
      this.livros = this._usuario.perfi.livros;
      this.musicas = this._usuario.perfi.musicas;
      this.filmes = this._usuario.perfi.filmes;
      this.relacionamento = this._usuario.perfi.relacionamento;
      this.quemSouEu = this._usuario.perfi.quemSouEu;
    }
  }
  constructor(private outrosFetchService: OutrosFetchServiceService) { }

  ngOnInit(): void {
    this.buscarUf()
    this.outrosFetchService.buscarCidades(this.estado!).subscribe((resposta) => { this.cidades = resposta; });

    this.perfilSocialForm = new FormGroup({
      quemSouEu: new FormControl(""),
      genero: new FormControl(""),
      estado: new FormControl(""),
      cidade: new FormControl(""),
      relacionamento: new FormControl(""),
      livros: new FormControl(""),
      musicas: new FormControl(""),
      filmes: new FormControl(""),
    });

  }
  guardarMudancas() {
    this.onGuardarAlteracao.emit(this.perfilSocialForm);
  }
  async buscarUf() {
    this.outrosFetchService.buscarUF().subscribe((resposta) => {
      this.ufs = resposta;
    });
  }
  async buscarCidades(event: any) {
    this.outrosFetchService.buscarCidades(event.target.value).subscribe((resposta) => { this.cidades = resposta; });
  }
}
