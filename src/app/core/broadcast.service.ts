import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class BroadcastService {

  eventBus: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

}
