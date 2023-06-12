import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Resposta } from '../../interfaces/resposta';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {
  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }
  ngOnInit(): void {
    localStorage.setItem("token", "");
    if (localStorage.getItem("token")) {
      this.router.navigate(["/"]);
    }
  }
  async formGroupToFormData(form: FormGroup) {
    const formData = new FormData()
    Object.keys(form.controls).forEach(nomeCampo => {
      formData.append(nomeCampo, form.value[nomeCampo])
    });
    return formData;
  }
  async registro(form: FormGroup) {
    let formData = await this.formGroupToFormData(form);
    this.autenticacaoService.registro(formData).subscribe((resposta: Resposta) => {
      if (resposta.error) {
        //toDO 
        //sistema de mensagem na tela
        return;
      }
      localStorage.setItem("token", resposta.mensagem);
      if (localStorage.getItem("token")) {
        this.router.navigate(["/"]);
      }});
  }
  async login(form:FormGroup){
    let formData = await this.formGroupToFormData(form);
    this.autenticacaoService.login(formData).subscribe((resposta: Resposta) => {
      if (resposta.error) {
        //toDO 
        //sistema de mensagem na tela
        return;
      }
      localStorage.setItem("token", resposta.mensagem);
      if (localStorage.getItem("token")) {
        this.router.navigate(["/"]);
      }
    });
  }
}
