import { Component, OnInit,Input } from '@angular/core';
import { Maestro } from '../maestro'
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() maestro : Maestro| null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
