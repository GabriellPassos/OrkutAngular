import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa-amizades',
  templateUrl: './caixa-amizades.component.html',
  styleUrls: ['./caixa-amizades.component.css']
})
export class CaixaAmizadesComponent implements OnInit {
  public nomePerfil!: string;
  public fotoPerfil!: string;
  public _usuario!: any;
  public nomeUsuario!:any;
  @Input() set usuario(value: any) {
    if (value) {
      this.nomePerfil = value.perfi.nomePerfil;
      this.fotoPerfil = value.perfi.fotoPerfil;
      this.nomeUsuario = value.perfi.nomeUsuario;
    }
  }
  ngOnInit(): void {
    this.gerarPerfilTeste();
  }
  gerarPerfilTeste() {
      this.usuario = {
        "nomeUsuario": "markzukerberg",
        "email": "markzukerberg@gmail.com",
        "aniversario": "1111-11-11",
        "perfi": {
          "id": 2,
          "fotoPerfil": "assets/imagens/MarkZuckerberg.jpg",
          "nomePerfil": "Marcos Zukerberg",
          "frasePerfil": "se a versão é melhor que a original, publique a versão!",
          "genero": "masculino",
          "estado": "RO",
          "cidade": "Cabixi",
          "quemSouEu": "o pesadelo dos seus pais, prazer. amor da sua vida. ;)",
          "relacionamento": "casado(a)",
          "livros": "Facebook",
          "musicas": "Alcione - Você me vira a cabeça",
          "filmes": "Viagem ao centro da terra",
          "createdAt": "2023-07-10T20:05:14.000Z",
          "updatedAt": "2023-07-14T00:41:07.000Z",
          "usuarioId": 0
        }
      }
      return;
    }
  
}