import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutrosFetchServiceService {
  constructor(private httpClient :HttpClient){}
  buscarUF() : Observable<any> {
    return this.httpClient.get<any>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
  }
  buscarCidades(ufSigla:string):Observable<any>{
    return this.httpClient.get<any>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSigla}/municipios`);
  }
}
