import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-autenticacao',
  templateUrl: './popup-autenticacao.component.html',
  styleUrls: ['./popup-autenticacao.component.css']
})
export class PopupAutenticacaoComponent implements OnInit {
  @Input() AvisoValidacaoNome: string = '';
  @Input() AvisoValidacaoEmail: string = '';
  @Input() AvisoValidacaoSenha: string = '';
  @Input() AvisoValidacaoAniversario: string = '';
  @Output() onSubmit = new EventEmitter<FormGroup>();
  loginForm!: FormGroup;
  registroForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      senha: new FormControl("", [Validators.required]),
    });
    this.registroForm = new FormGroup({
      nomeUsuario: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      emailConfirmacao: new FormControl("", [Validators.required]),
      senha: new FormControl("", [Validators.required]),
      senhaConfirmacao: new FormControl("", [Validators.required]),
      aniversario: new FormControl("",[Validators.required])
    });
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
  submitLogin() {
    this.validacaoCampo(this.loginForm);
    this.onSubmit.emit(this.loginForm);
    if(this.loginForm.invalid){
      return;
    }
    
  }
  submitRegistro() {
    this.onSubmit.emit(this.registroForm);
    this.validacaoCampo(this.registroForm);
    if(this.registroForm.invalid){
      return;
    }
   
  }
}
