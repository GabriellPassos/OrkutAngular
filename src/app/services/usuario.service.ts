import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resposta } from '../componentes/interfaces/resposta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseApiUrl = environment.baseApiUrl;
  constructor(private httpClient: HttpClient) { }

  buscarUnicoUsuario(nomeUsuario: string): Observable<Resposta> {
    return this.httpClient.get<Resposta>(`${this.baseApiUrl}/usuario/${nomeUsuario}`);
  };
  buscarAmigos(){

  };
}
