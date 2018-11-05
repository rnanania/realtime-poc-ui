import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import Util from './util';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { GridData } from './grid';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataGridService {

  private insertNotifier  = new BehaviorSubject(null);
  insertNotifier$ = this.insertNotifier.asObservable();

  constructor(private http: HttpClient, private db: AngularFireDatabase) { 
  }

  //Generate on random data and returns a observable
  getPRLItem = (): Observable<any> => {
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

  getPRLList = () => {
    return this.db.list('/').
    // .snapshotChanges()
    //   .pipe(
    //     map(
    //       changes => {
    //         console.log('list ', changes);
    //         return changes
    //       }
    //     )
    //   )
    valueChanges();
  } 

  addPRLItem = (count: number = 1) => {
    this.generateRandomGridData(count).forEach(data => {
      this.db.list('/').push(data).then(
        (result: any) => {
          this.getOnePRLItem(result.key).subscribe(
            newItem => {
              this.insertNotifier.next(newItem);
            }
          );
        }
      )
    })
  }

  getOnePRLItem = (id) => {
    return this.db.object(`/${id}`).valueChanges();
    /* snapshotChanges().pipe(
      map(res => {
        console.log('inserted rec ', res.payload.val());
        this.insertNotifier.next(res.payload.val());
      })
    ); */
  }
}
