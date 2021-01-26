import { Injectable } from '@angular/core';
import { MAESTROS } from './mock-maestros';
import { Maestro } from './maestro';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class MaestroServicioService {

  constructor(private messageService: MessageService) { }

  getMaestro(): Observable<Maestro[]> {
    this.messageService.add('MaestroServicioService: fetched Maestros');
    return of(MAESTROS);
  }
}
