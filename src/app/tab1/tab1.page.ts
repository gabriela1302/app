import { Component } from '@angular/core';
import {AuthService} from "../servicios/auth.service"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public email : string;
public dni : string;
public nombre : string;
public apellido : string;
public fnac : Date;
public direccion : string;
public telefono : string;

  constructor(private auth : AuthService) {}

  onSubmitRegClient(){
    this.auth.regclient(this.dni,this.nombre, this.apellido, this.email, this.fnac, this.direccion, this.telefono).then(auth =>{
      console.log(auth)
      alert('Cliente registrado correctamente')
    }).catch(err => alert('Los datos ingresados son incorrectos'))
  }
}
