import { Component, OnInit } from '@angular/core';
import { load } from './shared/load-component/load-component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'teste-cadastro-meraking';
  public mostrarLoad?: boolean;

  constructor(private router: Router) {}

  ngOnInit(){
    load.show()
    this.router.navigate(['/admnistracao-usuario']);
  }

}
