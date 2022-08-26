import { AddRestoComponent } from './components/add-resto/add-resto.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { TableComponent } from './components/table/table.component';
import { NotFoundComponent } from './../../components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'table', component: TableComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'addresto', component: AddRestoComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'edit/:id', component: EditTableComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      {path:'**', component:NotFoundComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
