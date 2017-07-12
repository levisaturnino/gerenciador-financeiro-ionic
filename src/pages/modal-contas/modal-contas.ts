import { Component } from '@angular/core';
import { IonicPage, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalContasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html',
})
export class ModalContasPage {
  contas: { descricao: string; };

  constructor(private navParams: NavParams,private view: ViewController) {
  
    this.contas = navParams.get("parametro") || {descricao:""};
  
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContasPage');
  }
 salvar(){
    this.view.dismiss(this.contas);
  }

}
