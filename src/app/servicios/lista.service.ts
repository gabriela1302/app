import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private db :AngularFirestore) { }

  getClientes(){
    return this.db.collection('clientes').snapshotChanges()
   }

}
