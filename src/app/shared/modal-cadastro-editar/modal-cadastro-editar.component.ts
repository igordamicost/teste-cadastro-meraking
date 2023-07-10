import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, } from '@angular/material/dialog';
import { load } from '../load-component/load-component'
import { EventEmitter, Output } from '@angular/core';
import { UsuarioInterfaceResponse } from 'src/assets/interface/user-list.interface';

@Component({
  selector: 'app-modal-cadastro-editar',
  templateUrl: './modal-cadastro-editar.component.html',
  styleUrls: ['./modal-cadastro-editar.component.scss']
})
export class ModalCadastroEditarComponent {
  @Output() usuarioAtualizado = new EventEmitter<UsuarioInterfaceResponse>();
  @Output() usuarioCriado = new EventEmitter<UsuarioInterfaceResponse>();

  public visualizar:boolean
  public mensageria:boolean
  public form: boolean;
  public editar: boolean;
  public cadastrar: boolean;
  public formId: number;
  public formUser: string;
  public formEmail: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog,public dialogRef?: MatDialogRef<ModalCadastroEditarComponent>) {
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
    load.show()
    const body = {id: this.formId, username: this.formUser, email: this.formEmail}
    if (this.editar){
      this.usuarioAtualizado.emit(body);
    } else if (this.cadastrar) {
      this.usuarioCriado.emit(body);
    }
    this.dialogRef?.close(body);
  }

  public fechar(){
    load.show()
    this.dialog.closeAll()
  }

}
