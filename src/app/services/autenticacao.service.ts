import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resposta } from '../componentes/interfaces/resposta';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService{
  private baseApiUrl = environment.baseApiUrl;
  constructor(private httpClient:HttpClient) { }
  
 registro(formData: FormData): Observable<Resposta>{
    return this.httpClient.post<Resposta>(`${this.baseApiUrl}/registro`, formData);
  }
  login(formData:FormData):Observable<Resposta>{
    return this.httpClient.post<Resposta>(`${this.baseApiUrl}/login`, formData);
  }
}
