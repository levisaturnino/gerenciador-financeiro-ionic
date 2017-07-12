export class DAOContas {

    public list:any;

    constructor() {
      this.list = [];
  }

  getList(){
      this.list = [
          {
              descricao: "Alimentos"
          },
             {
              descricao: "Lazer"
          },
             {
              descricao: "Transporte"
          },
              {
              descricao: "Uber"
          },
              {
              descricao: "Bebida"
          },
      ]

      return this.list;
  }

  insert(conta){
      this.list.push(conta);
  }
  edit(conta){

  }
  delete(conta){
      let pos = this.list.indexOf(conta);
      this.list.splice(pos,1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
  }

}
