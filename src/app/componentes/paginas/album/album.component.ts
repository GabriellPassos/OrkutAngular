import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit{
  exibirForm: boolean = false;
  fotosCarregadas: any = [];
  previaFotosCarregadas: any = [];
  public albumsCarregados!:any;
  public _albumParaExibir!:any;
  set albumParaExibir(value:any){
    if(value){
      console.log(value)
    }
  }
  public exibirFotos:boolean = false;
  public baseApiUrlFoto :string = environment.baseFotoApiUrl;
  public baseApiUrlAlbum: string = environment.baseApiUrlAlbum;
  public usuario:any;
  public nomeUsuario:any = '';
constructor(private usuarioService: UsuarioService, private router:Router,private activatedRoute: ActivatedRoute){}
ngOnInit(): void {
  if (this.activatedRoute.snapshot.paramMap.get('nomeUsuario')) {
    this.nomeUsuario = this.activatedRoute.snapshot.paramMap.get('nomeUsuario');
  }

  this.buscarAlbum();
  this.buscarPerfil();
}
buscarPerfil(){
  this.usuarioService.buscarPerfil(this.nomeUsuario).subscribe({
    next:(resposta) =>{
      if(resposta.data.perfi.fotoPerfil){
        resposta.data.perfi.fotoPerfil = environment.baseFotoApiUrl + resposta.data.perfi.fotoPerfil;
      }
      if(!resposta.error){
        this.usuario = resposta.data;
        return;
      }
    },
    error:(err)=>{this.router.navigate(['/']);}
  });
}
  exibirCampoNovoAlbum(): void {
    this.exibirForm = !this.exibirForm;
  }
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
    if(index != null){
      this.fotosCarregadas.splice(index, 1);
      this.previaFotosCarregadas.splice(index , 1);
    }
  }
  enviarAlbum(event:any){
    let form = new FormData(event.target)
    for (let index = 0; index <  this.fotosCarregadas.length; index++) {
      const foto =  this.fotosCarregadas[index];
      form.append(index.toString(),foto);
    }
    this.usuarioService.novoAlbum(form).subscribe(()=>{window.location.reload();});
  }
  buscarAlbum(){
    this.usuarioService.buscarAlbumPorNomeUsuario(this.nomeUsuario).subscribe((res)=>{
      if(!res.error){
        this.albumsCarregados = res.data;
      }
    });
  }
}
