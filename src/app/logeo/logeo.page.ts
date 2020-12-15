import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth"
import { AuthService } from '../servicios/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.page.html',
  styleUrls: ['./logeo.page.scss'],
})
export class LogeoPage {

  signupView: boolean = false

  usuario: string;
  password: string;
  name : string;
  remail : string;
  rpassword :string;

  constructor(private authService: AuthService, public router: Router) { }

  toggleSignUpView () {
    this.signupView = !this.signupView
  }
  onSubmitLogin(){
    this.authService.login(this.usuario, this.password).then(res => {
      this.router.navigate(['/tabs/tab1'])
    }).catch(err => alert('Los datos ingresados son incorrectos'))
  }
  onSubmitRegister(){
    this.authService.register(this.remail, this.rpassword, this.name).then(auth =>{
      this.router.navigate(['/tabs/tab1'])
      console.log(auth)
    }).catch(err => console.log(err))
  }
}
