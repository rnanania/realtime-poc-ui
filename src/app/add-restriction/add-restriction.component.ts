import { Component } from '@angular/core';
import { SocketService } from '../shared/services/socket.service';

@Component({
  selector: 'app-add-restriction',
  templateUrl: './add-restriction.component.html',
  styleUrls: ['./add-restriction.component.scss'],
})
export class AddRestrictionComponent {
  constructor(private socketService: SocketService) { }

  // Ask back-end to generate new Restriction.
  add() {
    this.socketService.send();
  }
}
