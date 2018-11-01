import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { DataGridService } from './data-grid.service';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { switchMap, startWith, flatMap } from 'rxjs/operators';
import { GridData } from './grid';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMessageComponent } from './shared/snackbar-message/snackbar-message.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnDestroy, AfterViewInit {

  pollInterval: number = 4000;
  displayedColumns: string[] = ['originalDateAdded', 'issuerName', 'esmi', 'equityTicker', 'debtTicker', 'restrictionType', 'restrictionCategory'];
  dataSource: GridData[] = [];

  newItem: GridData;
  newItemSubscription: Subscription = new Subscription();

  constructor(public snackBar: MatSnackBar, private gridService: DataGridService) { 
    //Generate 10 random data on page load using the randomData generator utility
    this.dataSource = this.gridService.generateRandomGridData(3);
  }

  ngOnInit() {
    //Add the newly generated DataGrid item to dataSource property
    this.newItemSubscription = this.getPRLItem().subscribe((data: GridData[]) => {
      this.newItem = data[0];
      this.openSnackBar(this.newItem);
      this.dataSource = [...this.dataSource, this.newItem];
    })
  }
  
  ngAfterViewInit() {
    
  }
  //poll the getPRLItem service to get one random generated DataGrid item
  getPRLItem = () => {
    return interval(this.pollInterval).pipe(
      switchMap(() => this.gridService.getPRLItem())
    )
  }

  ngOnDestroy() {
    if(this.newItemSubscription) this.newItemSubscription.unsubscribe();
  }

  openSnackBar(data: any) {
    this.snackBar.openFromComponent(SnackbarMessageComponent, {
      data: data,
      duration: 2500
    })
  }

}


