import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public email!:string;
  @Input() nomeUsuario!:any;
  _usuario:any;
  @Input() set usuario(value:any){
    if(value){
      this._usuario = value;
      this.email = this._usuario.email
    }
  };
  constructor(private router:Router){}
ngOnInit(): void {

}
  logOut(){
    localStorage.setItem("token", '');
    this.router.navigate(["autenticacao"]);
  }
}
