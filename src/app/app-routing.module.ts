import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component'
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserInsertComponent } from './components/user-insert/user-insert.component';

const routes: Routes = [
{ path:'',component:UserListComponent },
{ path:'user-detail/:id',component:UserDetailsComponent },
{ path:'user-insert',component:UserInsertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
