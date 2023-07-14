import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resposta } from '../componentes/interfaces/resposta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseApiUrl = environment.baseApiUrl;
  constructor(private httpClient: HttpClient) { }

  buscarPerfil(nomeUsuario: string): Observable<Resposta> {
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}perfil/${nomeUsuario}`);
  };
  buscarAmigos(){
  };
  atualizarPerfil(dadosPerfil:FormData): Observable<Resposta>{
    return this.httpClient.patch<Resposta>(`${this.baseApiUrl}perfil`, dadosPerfil);
  };
  novoAlbum(form:FormData): Observable<Resposta>{
    return this.httpClient.post<Resposta>(`${this.baseApiUrl}album/novo`, form);
  };
  buscarAlbum(): Observable<Resposta>{
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}album`);
  };
  buscarAlbumPorNomeUsuario(nomeUsuario:string): Observable<Resposta>{
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}album/${nomeUsuario}`);
  }
  AtualizarAlbum(albumId:any, form:FormData): Observable<Resposta>{
    return this.httpClient.patch<Resposta>(`${this.baseApiUrl}album/${albumId}`, form);
  }
  buscarAlbumPorId(albumId:any, nomeUsuario:string): Observable<Resposta>{
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}album/${nomeUsuario}/${albumId}`);
  };
  excluirAlbum(albumId:any): Observable<Resposta>{
    return this.httpClient.delete<Resposta>(`${this.baseApiUrl}album/${albumId}`);
  }
  AdicionarFoto(albumId:any, fotos:any): Observable<Resposta>{
    return this.httpClient.patch<Resposta>(`${this.baseApiUrl}album/${albumId}`,fotos);
  }
  excluirFoto(fotoId:any): Observable<Resposta>{
    return this.httpClient.delete<Resposta>(`${this.baseApiUrl}foto/${fotoId}`);
  }
  novoRecado(nomeUsuario:string, recado:FormData): Observable<Resposta>{
    return this.httpClient.post<Resposta>(`${this.baseApiUrl}recados/${nomeUsuario}`,recado);
  }
  buscarRecado(): Observable<Resposta>{
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}recados/`);
  }
  buscarRecadoPorUsuario(nomeUsuario:string): Observable<Resposta>{
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}recados/${nomeUsuario}`);
  }
  excluirRecado(recadoId:any): Observable<Resposta>{
    return this.httpClient.delete<Resposta>(`${this.baseApiUrl}recados/${recadoId}`);
  }
  buscarPerfilInfo(): Observable<Resposta>{
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}perfilInfo/`);
  }
  verificarToken(): Observable<Resposta>{
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}verificarToken/`);
  }
}
