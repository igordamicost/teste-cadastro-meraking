import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaUsuarioComponent } from './tabela-usuario/tabela-usuario.component';

const routes: Routes = [
  {path:'admnistracao-usuario', component:TabelaUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
