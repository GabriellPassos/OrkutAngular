import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-coluna-perfil',
  templateUrl: './coluna-perfil.component.html',
  styleUrls: ['./coluna-perfil.component.css']
})
export class ColunaPerfilComponent implements OnInit {
  @Output() onLigarModoEdicao = new EventEmitter();
  @Output() onExibirPerfilSocial = new EventEmitter();
  @Output() onGuardarAlteracao = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  @Input() modoEdicao: boolean = false;
  @Input() set nomePerfil(value:string){
    this._nomePerfil = value;
    if(this.perfilColuna){
      this.perfilColuna.patchValue({ ["nomePerfil"]: this.nomePerfil });
    }
  }
  get nomePerfil(){
    return this._nomePerfil;
  }
  _nomePerfil!:string;
  @Input() genero?: string;
  @Input() relacionamento?:string;
  @Input() estado?: string;
  @Input() cidade?: string;

  perfilColuna!: FormGroup;
  ngOnInit(): void {
    this.perfilColuna = new FormGroup({
      nomePerfil: new FormControl(''),
      fotoPerfil: new FormControl(''),
    });

  }
  editarPerfilSocial() {
    this.onLigarModoEdicao.emit();
  }
  exibirPerfilSocial() {
    this.onExibirPerfilSocial.emit();
  }
  guardarMudancas() {
    this.onGuardarAlteracao.emit(this.perfilColuna);
  }
  enviarAlteracoesPerfil() {
    this.onSubmit.emit();
  }
}
