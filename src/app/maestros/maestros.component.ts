import { Component, OnInit } from '@angular/core';
import { Maestro } from '../maestro'
import { MAESTROS } from '../mock-maestros';
import { DETALLEFACTURA } from '../mock-detalle-factura';
import { MaestroServicioService } from '../maestro-servicio.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.css']
})
export class MaestrosComponent implements OnInit {

  selectedMaestro: Maestro | null = null;
  maestros = MAESTROS;
  detalleFactura=DETALLEFACTURA;



  constructor(private maestroServicioServece: MaestroServicioService,private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSelect(maestro: Maestro): void {
    this.selectedMaestro = maestro;
    this.messageService.add(`La direccio del envio ${maestro.direccion}`);
  }

  getMaestro(): void {
    this.maestroServicioServece.getMaestro()
      .subscribe(maestros => this.maestros = maestros)
  }
}
