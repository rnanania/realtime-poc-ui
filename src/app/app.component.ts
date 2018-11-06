import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMessageComponent } from './shared/components/snackbar-message/snackbar-message.component';

import { Restriction } from './shared/model/restriction';
import { SocketService } from './shared/services/socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'realtime-poc-ui';
  ioConnection: any = null;

  constructor(
    public snackBar: MatSnackBar,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private socketService: SocketService){
    this.matIconRegistry.addSvgIcon(
      `angular_icon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/angular-white-transparent.svg`)
    );
  }

  ngOnInit() {
    this.initIoConnection();
  }

  initIoConnection() {
    // Init Socket
    this.socketService.initSocket();

    // Listen to all new Restriction creation.
    this.ioConnection = this.socketService.onNewRestriction().subscribe((data: Restriction) => {
      this.snackBar.openFromComponent(SnackbarMessageComponent, {
        data: data,
        duration: 2500
      })
    });
  }

  // Ask back-end to generate new Restriction.
  addRestriction() {
    this.socketService.send();
  }

  ngOnDestroy() {
    if(this.ioConnection) this.ioConnection.unsubscribe();
  }
}
