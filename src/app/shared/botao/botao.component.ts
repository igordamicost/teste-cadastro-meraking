import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {
  @Input() submeter?: boolean;
  @Input() cancelar?: boolean;
  @Input() label?: string;
  @Output() public enviarAcao = new EventEmitter

 public enviar(){
  this.enviarAcao.emit()
 }

}
