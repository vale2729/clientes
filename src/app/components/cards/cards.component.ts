import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  clientes : Cliente[] = [];
  constructor(private _clienteService : ClientesService) { }

  ngOnInit(): void {
    this._clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    })
  }

}
