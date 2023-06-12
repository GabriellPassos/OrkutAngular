import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OutrosFetchServiceService } from 'src/app/services/outros-fetch-service.service';

@Component({
  selector: 'app-perfil-social',
  templateUrl: './perfil-social.component.html',
  styleUrls: ['./perfil-social.component.css']
})
export class PerfilSocialComponent implements OnInit {
  @Input() modoEdicao:boolean = false;
  @Output() onGuardarAlteracao = new EventEmitter();
  public ufs : any;
  public cidades:any;
  @Input() cidade?:string;
  @Input() estado?: string;
  @Input() genero?: string;
  @Input() aniversario?:string;
  @Input() quemSouEu?:string;
  @Input() frasePerfil?:string;
  @Input() relacionamento?:string;
  @Input() livros?:string;
  @Input() musicas?:string;
  @Input() filmes?:string;
  perfilSocialForm! : FormGroup;
  constructor(private outrosFetchService :OutrosFetchServiceService){}

  ngOnInit(): void {
    this.buscarUf()
    this.outrosFetchService.buscarCidades(this.estado!).subscribe((resposta)=>{this.cidades = resposta;});

    this.perfilSocialForm = new FormGroup({
      frasePerfil: new FormControl(""),
      quemSouEu: new FormControl(""),
      genero: new FormControl(""),
      estado: new FormControl(""),
      cidade: new FormControl(""),
      relacionamento: new FormControl(""),
      livros: new FormControl(""),
      musicas: new FormControl(""),
      filmes: new FormControl(""),
    });
    this.perfilSocialForm.patchValue({["frasePerfil"]:this.frasePerfil}); 
    this.perfilSocialForm.patchValue({["quemSouEu"]:this.quemSouEu}) ; 
    this.perfilSocialForm.patchValue({["genero"]:this.genero}); 
    this.perfilSocialForm.patchValue({["cidade"]:this.cidade}) ; 
    this.perfilSocialForm.patchValue({["estado"]:this.estado}); 
    this.perfilSocialForm.patchValue({["livros"]:this.livros}) ; 
    this.perfilSocialForm.patchValue({["relacionamento"]:this.relacionamento}); 
    this.perfilSocialForm.patchValue({["musicas"]:this.musicas}) ; 
    this.perfilSocialForm.patchValue({["filmes"]:this.filmes}) ; 
  }
  guardarMudancas(){
    this.onGuardarAlteracao.emit(this.perfilSocialForm);
  }
  async buscarUf(){
    this.outrosFetchService.buscarUF().subscribe((resposta)=>{
      this.ufs = resposta;
    });
  }
  async buscarCidades(event:any){
    this.outrosFetchService.buscarCidades(event.target.value).subscribe((resposta)=>{this.cidades = resposta;});
  } 
}
