import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';
import { CadastroPage } from '../cadastro/cadastro';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios;
    
  constructor(public navCtrl: NavController, public usuariosProvider: UsuariosProvider, private alertCtrl: AlertController) { //coloco o provider como public ou private?
    this.usuarios = usuariosProvider.usuarios;
  }

  ngOnInit(){
    this.usuariosProvider.getUsuarios()
    .then(res => {
      this.usuarios = this.usuariosProvider.usuarios;
    });

  }

    
  deletar(usuario){
    let confirm = this.alertCtrl.create({
      title: 'Calma',
      message: 'Tem certeza de que quer deletar esse usuário?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Deletar',
          handler: () => {
            this.usuariosProvider.removeUsuario(usuario);
            //this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
      

  cadastrar(){
    this.navCtrl.push(CadastroPage);
  }
}
