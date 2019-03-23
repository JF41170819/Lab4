import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor() {
    this.usuario = new Usuario('aaaa', 'na');
  }

  mostrar() {
    console.info(this.usuario);
  }

  ngOnInit() {
  }

}
