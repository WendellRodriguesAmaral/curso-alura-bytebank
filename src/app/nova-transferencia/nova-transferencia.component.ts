import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  
  constructor(private service:TransferenciaService, private router:Router) { }

  transferir() {
      
    console.log('solicitada nova transferencia');
    console.log(this.valor);
    const valorEmitir:Transferencia={
        valor: this.valor,
        destino: this.destino
    }
  this.service.adicionar(valorEmitir).subscribe(result => {
    console.log(result);
    this.limpaCampos();
    this.router.navigateByUrl('extrato')  // quando adicionar uma transferencia, redireciona para a pagina de extrato
  }
  , (error)=>console.log(error))

  }

  limpaCampos(){
      this.valor=0;
      this.destino=0;
  }
}
