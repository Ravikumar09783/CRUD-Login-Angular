import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { TableComponent } from './components/table/table.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRestoComponent } from './components/add-resto/add-resto.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [AdminDashboardComponent, HeaderComponent, FooterComponent, HomeComponent, ContactComponent, ServicesComponent, AboutComponent, TableComponent, EditTableComponent, AddRestoComponent],
  imports: [CommonModule, AdminRoutingModule,ReactiveFormsModule,NgxDropzoneModule],
})
export class AdminModule {}
