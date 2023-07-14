import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-coluna-perfil',
  templateUrl: './coluna-perfil.component.html',
  styleUrls: ['./coluna-perfil.component.css']
})
export class ColunaPerfilComponent implements OnInit {

  @Input() exibicaoPerfilSocial: boolean = false;
  @Output() onMudancaFoto= new EventEmitter;
  @Output() onLigarModoEdicao = new EventEmitter();
  @Output() onGuardarAlteracao = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  @Input() modoEdicao: boolean = false;
  @Input() modoVisitante:boolean = false;
  public nomePerfil!:string;
  public genero!: string;
  public relacionamento!: string;
  public estado!: string;
  public cidade!: string;
  public fotoPerfil!: string ;
 public _usuario!:any;
 @Input() nomeUsuario!:any;
 @Input() set usuario(value:any){
  if(value){
    this.nomePerfil = value.perfi.nomePerfil;
    this.genero = value.perfi.genero;
    this.relacionamento = value.perfi.relacionamento;
    this.estado = value.perfi.estado;
    this.fotoPerfil = value.perfi.fotoPerfil;
    this.cidade = value.perfi.cidade;
    this.perfilColuna.patchValue({ ["nomePerfil"]: this.nomePerfil });
  }

 }
  
  private fotoCarregada:any;
  perfilColuna!: FormGroup;
  ngOnInit(): void {
    this.perfilColuna = new FormGroup({
      nomePerfil: new FormControl(''),
    });
  }
  editarPerfilSocial() {
    this.onLigarModoEdicao.emit();
  }
  guardarMudancas() {
    this.onGuardarAlteracao.emit(this.perfilColuna);
  }
  enviarAlteracoesPerfil() {
    this.onSubmit.emit();
  }
  carregarPrevia(event: any) {
    this. fotoCarregada = event.target.files[0];
    this.onMudancaFoto.emit(this. fotoCarregada);
    if (this. fotoCarregada ) {
      const fileReader = new FileReader();
      fileReader.onloadend = (()=>{
        this.atualizarFotoPrevia(fileReader.result)
      });
      fileReader.readAsDataURL(this. fotoCarregada );
    }
  }
  atualizarFotoPrevia(previaFoto:any){
    this.fotoPerfil = previaFoto;
  }
}
