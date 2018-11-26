import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {
  usuarios=[]
  constructor(private storage : Storage) {
  }


  getUsuarios(){
    return this.storage.get('usuarios')
    .then(
    (usuarios) => {
    usuarios? this.usuarios = usuarios : this.usuarios = [];
    })
    .catch(
    err => console.log(err)
    );

    
  }

  salvarUsuario(usuario){
    this.usuarios.push(usuario);
    console.log(this.usuarios);
    this.writeToStorage();
  }

  removeUsuario(usuario){
    let index = this.usuarios.indexOf(usuario);
    if(index > -1){
      this.usuarios.splice(index,1); //isso tira o elemento com esse indice do vetor
      this.writeToStorage();
    }
  }

  writeToStorage(){
    this.storage.set('usuarios',this.usuarios) // set key-value pairs
    .then(// successful add
    // do nothing
    )
    .catch(err => {// catch errors and do error handling here
    err => console.log(err);
    });
    }
    

  qtdUsuarios(){
    return this.usuarios.length;
  }
}
