import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-recados',
  templateUrl: './recados.component.html',
  styleUrls: ['./recados.component.css']
})
export class RecadosComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private router:Router) { }
  public recados: any = [];
  public nomeUsuario: any = '';
  public usuario: any;
 
  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('nomeUsuario')) {
      this.nomeUsuario = this.activatedRoute.snapshot.paramMap.get('nomeUsuario')
    } 
    this.buscarPerfil();
    this.buscarRecado();
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

  buscarRecado() {
    this.usuarioService.buscarRecadoPorUsuario(this.nomeUsuario).subscribe((res) => {
      if (!res.error) {
        this.recados = res.data;
        return;
      }
    });
  }
  novo(recado: FormData) {
    this.usuarioService.novoRecado(this.nomeUsuario, recado).subscribe((res) => {
      if (!res.error) {
        console.log(res.mensagem)
      }
    });
  }
  excluir(event: any) {
    let recadoId: any = event.target.value;
    this.usuarioService.excluirRecado(recadoId).subscribe((res) => {
      if (!res.error) {
        console.log(res.mensagem)
      }
    });
  }
}
