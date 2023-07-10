import { Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import  {MatTableDataSource } from '@angular/material/table';
import { UsuarioInterfaceResponse } from 'src/assets/interface/user-list.interface';
import { UsuarioService } from 'src/assets/service/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastroEditarComponent } from '../modal-cadastro-editar/modal-cadastro-editar.component';
import { load } from '../load-component/load-component'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  public displayedColumns: string[] = ['id', 'username', 'email', 'acao'];
  public dataSource: MatTableDataSource<UsuarioInterfaceResponse> = new MatTableDataSource<UsuarioInterfaceResponse>();
  public usuarios?: UsuarioInterfaceResponse[] = []
  public label?: string;
  public submeter: boolean;
  public disabled?:boolean;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private usuarioService: UsuarioService,public dialog:MatDialog) {
    this.obterUsuariosCadastrados()
    this.label = 'Add novo usuário'
    this.submeter = true;
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setTimeout(() => {
      load.hide()
    },1000)
  }

  public obterUsuariosCadastrados() {
    this.usuarioService.obterUsuario()
      .subscribe((resp) => {
        if (resp) {
          this.usuarios = resp;
          this.dataSource.data = resp;
        }
      });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  /**
   * metodo responsavel por abrir modal para visualizar um item da lista
   * @param event linha a ser visualizada
   * @method visualizarUsuario
   */
  public visualizarUsuario(event:any){
    this.dialog.open(ModalCadastroEditarComponent, {
      height: '300px',
      width: '300px',
      data: { usuario: event, visualizar: true, form: true }
    })
  }

  /**
   * metodo responsavel por abrir modal para alterar um item da lista
   * @param event linha a ser editada
   * @param usuarios lista que tera a linha editada
   * @method editarUsuario
   */
  public editarUsuario(event:UsuarioInterfaceResponse){
    const dialogRef = this.dialog.open(ModalCadastroEditarComponent, {
      height: '300px',
      width: '300px',
      data: { usuario: event, visualizar: false, form: true, editar: true }
    })
    dialogRef.afterClosed().subscribe((usuarioAtualizado?: UsuarioInterfaceResponse) => {
      if (usuarioAtualizado && this.usuarios) {
        const index = this.usuarios.findIndex(usuario => usuario.id === usuarioAtualizado.id);
        if (index !== -1) {
          this.dataSource.data[index] = usuarioAtualizado;
          this.dataSource._updateChangeSubscription();
          setTimeout(() => {
            load.hide();
          }, 1000);
        }
      }
    });
  }

  /**
   * metodo responsavel por abrir modal para deletar uma posição da lista
   * @param event linha a ser deletada
   * @param usuarios lista que tera a linha removida
   * @method deletarUsuario
   */
  public deletarUsuario(event?: UsuarioInterfaceResponse): void {
    if (event && this.usuarios) {
      const index = this.usuarios.findIndex(usuario => usuario?.id === event.id);
      if (index !== -1) {
        this.usuarios.splice(index, 1);
        this.dialog.open(ModalCadastroEditarComponent, {
          data: { usuario: event, mensageria: true, form: false }
        }).afterClosed().subscribe(()=>
        setTimeout(() => {
          load.hide()
        },1000)
        )
        this.dataSource.data = [...this.usuarios];
      } else {
        alert('Usuario não encontrado')
      }
    }
  }

  /**
   * metodo responsavel por abrir modal para cadastro
   * @method abrirDialogCadastro
   */
  public abrirDialogCadastro(){
    const dataSourceData = this.dataSource.data;
    const proximoId = dataSourceData.length + 1;
    let usuario ={ id: proximoId, username: '', email:''}
    const dialogRef = this.dialog.open(ModalCadastroEditarComponent, {
      height: '300px',
      width: '300px',
      data: { usuario: usuario, visualizar: false, form: true, cadastrar:true, editar:false }
    })
    dialogRef.afterClosed().subscribe((usuarioCriado?: UsuarioInterfaceResponse) => {
      if (usuarioCriado && this.usuarios) {
        this.usuarios?.push(usuarioCriado);
        this.dataSource.data = [...this.usuarios];
        setTimeout(() => {
          load.hide();
        }, 1000);
      }
    });
  }
}
