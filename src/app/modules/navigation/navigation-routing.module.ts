import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { AddressComponent } from './components/address/address.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AddappointmentComponent } from './components/addappointment/addappointment.component';
import { PaymentComponent } from './components/payment/payment.component';


const routes: Routes = [
  {path:'' , component:NavComponent,
  children: [
  { path:'dashboard', component:DashboardComponent },
  {path:'table' , component:TableComponent},
  {path:'dragdrop', component:DragdropComponent},
  {path:'address' , component:AddressComponent},
  {path:'doctor' , component:DoctorComponent},
  {path:'addDoctor' , component:AdddoctorComponent},
  {path:'appointment' , component:AppointmentComponent},
  {path:'addAppointment' , component:AddappointmentComponent},
  {path:'payment' , component:PaymentComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
