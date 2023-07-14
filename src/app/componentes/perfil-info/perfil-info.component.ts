import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-perfil-info',
  templateUrl: './perfil-info.component.html',
  styleUrls: ['./perfil-info.component.css']
})
export class PerfilInfoComponent implements OnInit {
  @Input() modoEdicao:boolean = false;
  @Output() onGuardarAlteracao = new EventEmitter();
  public qntRecados:any = '0';
  public qntFotos:any = '0';
  public frasePerfil!:string;
  public nomePerfil!:string;
  public _usuario : any;
  @Input() set usuario(value:string){
    if(value){
      this._usuario = value
      this.frasePerfil = this._usuario.perfi.frasePerfil;
      this.nomePerfil = this._usuario.perfi.nomePerfil;
      this.perfilInfo.patchValue({["frasePerfil"]:this._usuario.perfi.frasePerfil}); 
    }
  }; 
  public perfilInfo! : FormGroup;
  constructor(private usuarioService:UsuarioService){}
  ngOnInit(): void {
    this.perfilInfo = new FormGroup({
      frasePerfil : new FormControl(""),
    });
    this.usuarioService.buscarPerfilInfo().subscribe((resposta)=>{
      if(!resposta.error){
        let a = resposta;
        this.qntFotos = resposta.data.quantidadeFotos;
        this.qntRecados = resposta.data.quantidadeRecados;
      }
    });
  }
  guardarMudancas(){
    this.onGuardarAlteracao.emit(this.perfilInfo);
  }
}
