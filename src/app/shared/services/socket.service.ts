import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import * as socketIO from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';

import { Restriction } from '../model/restriction';

@Injectable()
export class SocketService {
  private socket;

  public initSocket() {
    this.socket = socketIO(SERVER_URL);
  }

  public send(): void{
    this.socket.emit('newRestriction');
  }

  public onNewRestriction(): Observable<Restriction> {
    return new Observable<Restriction>(observer => {
      this.socket.on('newRestriction', (data: Restriction) => observer.next(data));
    });
  }
}
