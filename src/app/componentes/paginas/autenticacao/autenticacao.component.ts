import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public loginForm!:FormGroup;
  @Input() AvisoValidacaoNome: string = '';
  @Input() AvisoValidacaoEmail: string = '';
  @Input() AvisoValidacaoSenha: string = '';
  @Input() AvisoValidacaoAniversario: string = '';
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      senha: new FormControl("", [Validators.required]),
    });
    localStorage.setItem("token", "");
    if (localStorage.getItem("token")) {
      this.router.navigate(["/"]);
    }
  }
  validacaoCampo(form: FormGroup) {
    Object.keys(form.controls).forEach(nomeCampo => {
      let listaErros = form.controls[nomeCampo].errors;
      let erro!: string;
      switch (true) {
        case listaErros?.['required']:
          erro = "Campo obrigatório.";
          break;
        default:
          erro = '';
          break;
      }
      switch (nomeCampo) {
        case 'nome':
          this.AvisoValidacaoNome = erro;
          break;
        case 'email':
          this.AvisoValidacaoEmail = erro;
          break;
        case 'emailConfirmacao':
          this.AvisoValidacaoEmail = erro;
          break;
        case 'senha':
          this.AvisoValidacaoSenha = erro;
          break;
        case 'senhaConfirmacao':
          this.AvisoValidacaoSenha = erro;
          break;
        case 'aniversario':
          this.AvisoValidacaoAniversario = erro;
          break;
      }
    });
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
