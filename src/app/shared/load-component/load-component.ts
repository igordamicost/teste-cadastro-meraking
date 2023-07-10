import { Component, Inject } from '@angular/core';

let mostrarLoad: boolean;
export let load = {
  show()
  {
    mostrarLoad = true;
  },
  hide()
  {
    mostrarLoad = false;
  }
};
@Component({
  selector: 'load-component',
  templateUrl: './load-component.html',
  styleUrls: ['./load-component.scss']
})
export class LoadComoponent {
  public mostrarLoad?: boolean;

  constructor() { mostrarLoad = false }

  ngOnInit() { }

  public get loading()
  {
    return mostrarLoad;
  }


}
