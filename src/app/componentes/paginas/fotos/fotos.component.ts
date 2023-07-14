import { Component, OnInit} from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  public album:any=[];
  public baseApiUrlFoto :string = environment.baseFotoApiUrl;
  public edicaoTitulo:boolean = false;
  public titulo!:string;
  public nomeUsuario!:any;
  public usuario!:any;
  public superExibicaoFoto!:string;
  public superExibicao: boolean = false;
  constructor(private usuarioService:UsuarioService, private activatedRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.nomeUsuario = this.activatedRoute.snapshot.paramMap.get('nomeUsuario');
    if(this.nomeUsuario){
      this.buscarPerfil();
    }

    let albumId = this.activatedRoute.snapshot.paramMap.get('albumId');
    this.buscarAlbum(albumId);
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
  buscarAlbum(albumId:any){
    this.usuarioService.buscarAlbumPorId(albumId, this.nomeUsuario).subscribe((res)=>{
      if(!res.error){
        this.album = res.data;
        this.titulo = res.data.titulo
      }
    });
  }
  editarTitulo(){
    if(this.album.titulo != this.titulo){
      let form = new FormData;
      form.append('titulo', this.titulo);
       this.usuarioService.AtualizarAlbum(this.album.id, form).subscribe((res)=>{
        if(!res.error){
          this.buscarAlbum(this.album.id);
        }});
    }
    this.edicaoTitulo = !this.edicaoTitulo;
  }
  excluirFoto(fotoId:any){
    this.usuarioService.excluirFoto(fotoId).subscribe((res)=>{
      if(!res.error){
        window.location.reload();
      }
    });
  }
  excluirAlbum(albumId:any){
    this.usuarioService.excluirAlbum(albumId).subscribe((res)=>{
      if(!res.error){
        this.router.navigate(["album"]);
      }
    });
  }
  atualizarTituloAlbum(form:FormData){
    this.usuarioService.AtualizarAlbum(this.album.id, form).subscribe((res)=>{if(!res.error){window.location.reload();}});
  }
  adicionarFoto(fotos:FormData){
    this.usuarioService.AdicionarFoto(this.album.id, fotos).subscribe((res)=>{if(!res.error){window.location.reload();}});
  }
  expandir(url:string){
    if(url){
      this.superExibicao = true;
      this.superExibicaoFoto = url;
      return;
    }
    this.superExibicao = false;
  }
}
