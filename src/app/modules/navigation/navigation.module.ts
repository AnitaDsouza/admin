import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddressComponent } from './components/address/address.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AddappointmentComponent } from './components/addappointment/addappointment.component';


@NgModule({
  declarations: [NavComponent, DashboardComponent, TableComponent, DragdropComponent, AddressComponent, DoctorComponent, AdddoctorComponent, PaymentComponent, AppointmentComponent, AddappointmentComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    LayoutModule,
   
    DragDropModule,
    
    ReactiveFormsModule,
   MaterialModule 
  

  ]
})
export class NavigationModule { }
