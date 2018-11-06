import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestrictionListComponent } from './restriction-list/restriction-list.component';
import { AddRestrictionComponent } from './add-restriction/add-restriction.component';

const routes: Routes = [
  { path: 'list', component: RestrictionListComponent },
  { path: 'add', component: AddRestrictionComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
