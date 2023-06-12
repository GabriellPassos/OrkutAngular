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
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}/perfil/${nomeUsuario}`);
  };
  buscarAmigos(){
  };
  atualizarPerfil(dadosPerfil:FormData): Observable<Resposta>{
    return this.httpClient.patch<Resposta>(`${this.baseApiUrl}/perfil`, dadosPerfil);
  };
}
