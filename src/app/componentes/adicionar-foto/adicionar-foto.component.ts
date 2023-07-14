import { Component, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-adicionar-foto',
  templateUrl: './adicionar-foto.component.html',
  styleUrls: ['./adicionar-foto.component.css']
})
export class AdicionarFotoComponent {
  @Output() onEnviarFotos = new EventEmitter;
  public fotosCarregadas: any = [];
  public previaFotosCarregadas: any = [];
  
  constructor(private usuarioService: UsuarioService) { }

  adcionarFoto(event: any) {
    let arquivos: Array<FileList> = event.target.files;
    for (let index = 0; index < arquivos.length; index++) {
      this.carregarPrevia(arquivos[index]);
      this.fotosCarregadas.push(arquivos[index]);
    }
  }
  carregarPrevia(foto: any) {
    if (foto) {
      const fileReader = new FileReader();
      fileReader.onloadend = (() => {
        this.previaFotosCarregadas.push(fileReader.result);
      });
      fileReader.readAsDataURL(foto);
    }
  }
  removerFotoCarregada(index: any) {
    index = parseInt(index.target.value);
    if (index != null) {
      this.fotosCarregadas.splice(index, 1);
      this.previaFotosCarregadas.splice(index, 1);
    }
  }
  enviarAlbum(event: any) {
    let form = new FormData(event.target)
    for (let index = 0; index < this.fotosCarregadas.length; index++) {
      const foto = this.fotosCarregadas[index];
      form.append(index.toString(), foto);
    }
    this.onEnviarFotos.emit(form);
  }

}

