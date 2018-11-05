import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as Filtersetting from './filters';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  formGroup: FormGroup;
  error: string;
  searchFor;

  restrictionCategoryList: Array<any>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      issuer: ['something'],
      searchFor: ['issuer'],
      restrictionCategory: []
    })
  }

  initializeForm() {
    this.restrictionCategoryList = Filtersetting.Filters.restrictionCategory;
  }

  applyFilter() {
    console.log('Filter Object ', this.formGroup);
  }
}
