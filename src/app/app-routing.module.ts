import { RegisterComponent } from './components/register/register.component';
import { AddRestoComponent } from './modules/admin/components/add-resto/add-resto.component';
import { EditTableComponent } from './modules/admin/components/edit-table/edit-table.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addresto', component: AddRestoComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'edit/:id', component: EditTableComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
