import { Component, OnInit } from '@angular/core';
import {AuthService} from "../servicios/auth.service"
import {ListaService} from "../servicios/lista.service"

interface lista{
  dni: string
  apellido :string
  telefono :string
  id: string
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public clientes: any=[];

  constructor(public authservice : AuthService, public listaservice : ListaService) {}


    
    ngOnInit(){
      this.listaservice.getClientes().subscribe( lista =>{
        lista.map( lista => {
          const data : lista =lista.payload.doc.data() as lista;
          data.id = lista.payload.doc.id;
          console.log(data)
        })
      })
    }

}
