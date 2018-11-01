import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { GridData } from '../../grid';

@Component({
  selector: 'app-snackbar-message',
  templateUrl: './snackbar-message.component.html',
  styleUrls: ['./snackbar-message.component.scss']
})
export class SnackbarMessageComponent implements OnInit {
  
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: GridData) { }

  ngOnInit() {
  }

}
