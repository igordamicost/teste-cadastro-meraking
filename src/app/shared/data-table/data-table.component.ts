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
    load.hide()
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

  public visualizarUsuario(event:any){
    this.dialog.open(ModalCadastroEditarComponent, {
      height: '300px',
      width: '300px',
      data: { usuario: event, visualizar: true, form: true }
    })
  }

  public editarUsuario(event:UsuarioInterfaceResponse){
    this.dialog.open(ModalCadastroEditarComponent, {
      height: '300px',
      width: '300px',
      data: { usuario: event, visualizar: false, form: true, editar: true }
    })
  }

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

  public abrirDialogCadastro(){
    let usuario ={ id: null, username: '', email:''}
    this.dialog.open(ModalCadastroEditarComponent, {
      height: '250px',
      width: '300px',
      data: { usuario: usuario, visualizar: false, form: true, cadastrar:true, editar:false }
    })
  }
}
