import { Component, OnInit, OnDestroy } from '@angular/core';

import { Restriction } from '../shared/model/restriction';
import { RestrictionListService } from '../shared/services/restriction.list.service';
import { Subscription } from 'rxjs';
import Util from './util';

@Component({
  selector: 'app-restriction-list',
  templateUrl: './restriction-list.component.html',
  styleUrls: ['./restriction-list.component.scss']
})
export class RestrictionListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['tier','originalDateAdded', 'issuerName', 'esmi', 'equityTicker', 'debtTicker', 'restrictionType', 'restrictionCategory'];
  dataSource: Restriction[] = [];

  loading: boolean = true;
  itemListSubscription: Subscription = new Subscription();

  constructor(private restrictionListService: RestrictionListService) {}

  ngOnInit() {
    // Get the existing restrictions
    this.getRestrictionList();
  }

  ngOnDestroy() {
    // Unsubscribe things here.
    if(this.itemListSubscription) this.itemListSubscription.unsubscribe();
  }

  getRestrictionList = () => {
    this.itemListSubscription = this.restrictionListService.getRestrictionsList().subscribe((data: Restriction[]) => {
      this.dataSource = [...data];
      this.loading = false;
    });
  }

  applyFilter = (filters: any) => {
    if(filters){
      this.dataSource = <Restriction[]>[...Util.multiFilter(this.dataSource, filters)];
    }else {
      this.getRestrictionList();
    }
  }
}
