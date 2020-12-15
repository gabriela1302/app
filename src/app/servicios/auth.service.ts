import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth"
import { rejects } from 'assert';
import { promise } from 'protractor';
import {AngularFirestore} from "@angular/fire/firestore"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private db :AngularFirestore) { }

  login(usuario:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(usuario, password).then(user => {
        resolve(user)
      }).catch(err => rejected(err))  
    })
    }

    register(email : string, password : string, name : string){
      return new Promise((resolve, reject)=>{
        this.AFauth.createUserWithEmailAndPassword(email,password).then(res =>{
          console.log(res.user.uid);
          this. db.collection('users').doc(res.user.uid).set({
            name :name, 
          })
          resolve(res)
        }).catch(err => reject(err))
      })
    }

    regclient(dni : string, nombre : string, apellido : string, email : string, fnac : Date, direccion : string, telefono :string){
      return new Promise((resolve, reject)=>{
        this.AFauth.createUserWithEmailAndPassword(email, dni).then(res =>{
          console.log(res.user.uid);
          this. db.collection('clientes').doc(res.user.uid).set({
            dni :dni,
            nombre : nombre,
            apellido : apellido,
            email : email,
            fnac : fnac,
            direccion :direccion,
            telefono : telefono,
          })
          resolve(res)
        }).catch(err => reject(err))
      })
    }
}
