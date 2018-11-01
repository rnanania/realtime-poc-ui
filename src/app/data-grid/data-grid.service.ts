import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Util from './util';


@Injectable({
  providedIn: 'root'
})
export class DataGridService {

  constructor(private http: HttpClient) { }

  //Generate on random data and returns a observable
  getPRLItem = (): Observable<any> => {
    console.log('getPRLItem service');
    return Observable.create( 
      observer => {
        observer.next(this.generateRandomGridData(1))
      }
    );
  }
  
  //Generate n number of Random GridData using the util function
  generateRandomGridData = (count: number = 1) => {
    return Array(count)
    .fill(1)
    .map(_ => Util.getRandomGridData());
  }
}
