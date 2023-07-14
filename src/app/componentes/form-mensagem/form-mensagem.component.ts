import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-form-mensagem',
  templateUrl: './form-mensagem.component.html',
  styleUrls: ['./form-mensagem.component.css']
})

export class FormMensagemComponent {  
  @Output() onEnviarRecado = new EventEmitter;
  public _recados!:any;
  @Input() set recados(value:any){
    if(value){

      this._recados = value.recados;
      this.nomePerfil = value.nomePerfil
      this.fotoPerfil = value.fotoPerfil;
    }
  }
  get recados(){
    return this._recados;
  }
  public fotoPerfil!: string;
  public nomePerfil!:string;
  public _usuario!:any;
  public baseApiUrlFoto :string = environment.baseFotoApiUrl;
  public baseApiUrlRecado: string = environment.baseApiUrlRecado;
  public fotosCarregadas:Array<File> = new Array<File>();
public nomeUsuario!:any;
  @Input() set usuario(value:any){
    if(value){
      this._usuario = value;
      this.fotoPerfil = this.baseApiUrlFoto + this._usuario.perfi.fotoPerfil;
      this.nomePerfil = this._usuario.perfi.nomePerfil;
      this.nomeUsuario = this._usuario.nomeUsuario;
    }
  }

  constructor(private usuarioService:UsuarioService){}
  adicionarFoto(event: any) {
    let arquivos: Array<File> = event.target.files;
    for (let index = 0; index < arquivos.length; index++) {
      this.fotosCarregadas.push(arquivos[index]);
    }
  }
  enviarRecado(event:any){
    let form = new FormData(event.target)
    for (let index = 0; index < this.fotosCarregadas.length; index++) {
      form.append(index.toString(),this.fotosCarregadas[index]);
    }
    this.onEnviarRecado.emit(form);
  }
  excluirRecado(event:any){
    let recadoId:string = event.target.value;
    this.usuarioService.excluirRecado(recadoId).subscribe();
  }
}
