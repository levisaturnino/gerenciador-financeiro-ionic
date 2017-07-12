import { ModalContasPage } from './../modal-contas/modal-contas';

import { DAOContas } from './../../dao/dao-contas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ContasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({ 
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {

  listContas: any;
  dao: DAOContas;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.dao = new DAOContas();
    this.listContas = this.dao.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
  }

  itemSelected(conta){
  console.log(conta.descricao);
  }

  insert(){
  let profileModal = this.modalCtrl.create(ModalContasPage);
  
  profileModal.onDidDismiss((data) =>{
    //alert(data.descricao);
    this.dao.insert(data);
  })
  
  profileModal.present();
  }
  edit(conta){
  let profileModal = this.modalCtrl.create(ModalContasPage,{parametro: conta});
  
  profileModal.onDidDismiss((data) =>{
    //alert(data.descricao);
    this.dao.edit(data);
  })
  
  profileModal.present();
  }

  delete(conta){
    this.dao.delete(conta);
  }
}
