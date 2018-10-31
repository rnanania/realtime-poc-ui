import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  displayedColumns: string[] = ['originalDateAdded', 'issuerName', 'esmi', 'equityTicker', 'debtTicker', 'restrictionType', 'restrictionCategory'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }
  

}

export interface GridData {
  originalDateAdded: string;
  issuerName: string;
  esmi: string;
  equityTicker: string;
  debtTicker: string;
  restrictionCategory: string;
  restrictionType: string;
  writtenCom: any;
  alphaCapture: any;
  trading: any;

}

const ELEMENT_DATA: GridData[] = [
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 1', esmi: '123', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'DO', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 2', esmi: '456', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'ADV', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 3', esmi: '789', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'DO', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 4', esmi: '123.3', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'ADV', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 5', esmi: '123.23', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'DO', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 6', esmi: '23423.43', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'ADV', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 7', esmi: '5645.64', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'ADV', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 8', esmi: '545', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'ADV', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 9', esmi: '7656.5', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'DO', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},
  {originalDateAdded: '31 Oct 18, 10:34', issuerName: 'Issuer 10', esmi: '454.5', equityTicker: 'ACB', debtTicker: 'HGG', restrictionType: 'DO', restrictionCategory: '', writtenCom: '', alphaCapture: '', trading: ''},

];