import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './book/list/list.component';
import {ListReadComponent} from './book/list-read/list-read.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'list-read', component: ListReadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
