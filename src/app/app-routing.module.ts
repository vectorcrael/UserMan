import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';


//routes for the administrator
const routes: Routes = [
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/user', component: AdminUsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup-form', component: SignupFormComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'no-access', component: NoAccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
