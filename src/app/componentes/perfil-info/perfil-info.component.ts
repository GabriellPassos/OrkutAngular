import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil-info',
  templateUrl: './perfil-info.component.html',
  styleUrls: ['./perfil-info.component.css']
})
export class PerfilInfoComponent implements OnInit {
  @Input() modoEdicao:boolean = false;
  @Output() onGuardarAlteracao = new EventEmitter();
  @Input() set frasePerfil(value:string){
    this._frasePerfil = value
    if(this.perfilInfo){
      this.perfilInfo.patchValue({["frasePerfil"]:this._frasePerfil}); 
    }
  }; 
  get frasePerfil(){
    return this._frasePerfil
  };
  _frasePerfil! : string; 
  @Input() nomePerfil!:string;
  perfilInfo! : FormGroup;
  ngOnInit(): void {
    this.perfilInfo = new FormGroup({
      frasePerfil : new FormControl(""),
    });
    
  }
  guardarMudancas(){
    this.onGuardarAlteracao.emit(this.perfilInfo);
  }
}
