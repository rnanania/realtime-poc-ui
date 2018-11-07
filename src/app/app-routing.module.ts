import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestrictionListWjComponent } from './restriction-list-wj/restriction-list-wj.component';
import { AddRestrictionComponent } from './add-restriction/add-restriction.component';
import { RestrictionListFbComponent } from './restriction-list-fb/restriction-list-fb.component';

const routes: Routes = [
  { path: 'list-wj', component: RestrictionListWjComponent },
  { path: 'list-fb', component: RestrictionListFbComponent },
  { path: 'add', component: AddRestrictionComponent },
  { path: '', redirectTo: '/list-fb', pathMatch: 'full'},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
