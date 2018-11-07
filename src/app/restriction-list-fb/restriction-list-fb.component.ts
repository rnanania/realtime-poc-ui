import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { switchMap, startWith, flatMap, take, skip } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DataGridService } from './data-grid.service';
import { Restriction } from '../shared/model/restriction';
import { SnackbarMessageComponent } from '../shared/components/snackbar-message/snackbar-message.component';

@Component({
  selector: 'app-restriction-list-fb',
  templateUrl: './restriction-list-fb.component.html',
  styleUrls: ['./restriction-list-fb.component.scss']
})
export class RestrictionListFbComponent implements OnInit, OnDestroy, AfterViewInit {
  // pollInterval: number = 400000;
  displayedColumns: string[] = ['originalDateAdded', 'issuerName', 'esmi', 'equityTicker', 'debtTicker', 'restrictionType', 'restrictionCategory'];
  dataSource: Restriction[] = [];

  newItem: Restriction;
  newItemSubscription: Subscription = new Subscription();
  itemListSubscription: Subscription = new Subscription();


  constructor(public snackBar: MatSnackBar, private gridService: DataGridService) {
    //Generate 10 random data on page load using the randomData generator utility
    // this.dataSource = this.gridService.generateRandomGridData(50);

    this.itemListSubscription = this.gridService.getPRLList()
    .pipe(
      take(1)
    )
    .subscribe((items: Restriction[]) => {
      this.dataSource = items;
    });

    this.newItemSubscription = this.gridService.getPRLList()
    .pipe(
      skip(1)
    )
    .subscribe(
      (items: Restriction[]) => {
        this.dataSource = items
        this.openSnackBar(items)
      }
    );
  }

  ngOnInit() {
    //Add the newly generated DataGrid item to dataSource property
    // this.newItemSubscription = this.getPRLItem().subscribe((data: GridData[]) => {
    //   this.newItem = data[0];
    //   this.openSnackBar(this.newItem);
    //   this.dataSource = [...this.dataSource, this.newItem];
    // })
  }

  ngAfterViewInit() {

  }
  //poll the getPRLItem service to get one random generated DataGrid item
  // getPRLItem = () => {
  //   return interval(this.pollInterval).pipe(
  //     switchMap(() => this.gridService.getPRLItem())
  //   )
  // }

  ngOnDestroy() {
    if(this.newItemSubscription) this.newItemSubscription.unsubscribe();
    if(this.itemListSubscription) this.itemListSubscription.unsubscribe();
  }

  openSnackBar(data: any) {
    this.snackBar.openFromComponent(SnackbarMessageComponent, {
      data: data,
      duration: 2500
    })
  }

}
