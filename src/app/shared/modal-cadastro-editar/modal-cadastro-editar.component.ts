import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, } from '@angular/material/dialog';
import { load } from '../load-component/load-component'

@Component({
  selector: 'app-modal-cadastro-editar',
  templateUrl: './modal-cadastro-editar.component.html',
  styleUrls: ['./modal-cadastro-editar.component.scss']
})
export class ModalCadastroEditarComponent {

  public visualizar:boolean
  public mensageria:boolean
  public form: boolean;
  public editar: boolean;
  public cadastrar: boolean;
  public formId: number;
  public formUser: string;
  public formEmail: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog) {
    this.visualizar = data.visualizar;
    this.mensageria = data.mensageria;
    this.form = data.form;
    this.editar = data.editar;
    this.cadastrar = data.cadastrar;
    this.formId = data.usuario.id;
    this.formUser = data.usuario.username;
    this.formEmail = data.usuario.email
  }

  public salvarUsuario(){
    const body = {id: this.formId, username: this.formUser, email: this.formEmail}
    if (this.editar){
      console.log('editar',body)
    } else if (this.cadastrar) {
      console.log('cadastrar',body)
    }

  }

  public fechar(){
    load.show()
    this.dialog.closeAll()
  }

}
