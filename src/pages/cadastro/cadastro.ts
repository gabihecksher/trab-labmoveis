import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  nome: string;
  cpf: string;
  idade: number;
  email: string;

//nav controller responsavel pela navegacao de paginas
//nav params nao sei
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public usuariosProvider: UsuariosProvider) { //injecao de dependencias
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  salvarUsuario() {
    let usuario = {nome: this.nome, cpf: this.cpf, idade: this.idade, email: this.email}
    this.usuariosProvider.salvarUsuario(usuario);

    let alert = this.alertCtrl.create({
      title: 'UHUL',
      subTitle: 'Usuário cadastrado com sucesso',
      buttons: ['OK']
    });
    alert.present();

    this.navCtrl.pop();
  }
  log() {
    console.log(this.nome);
    
  }

}
