import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

//use the endpoint called user in the CRUD application
const routes: Routes = [
  { path: 'user', redirectTo: 'user/home', pathMatch: 'full'},
  { path: 'user/home', component: HomeComponent },
  { path: 'user/details/:UserId', component: DetailsComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/update/:UserId', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
