import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
 
  {
    path:'home',
    canActivate: [AuthGuard],
    loadChildren: 'src/app/modules/navigation/navigation.module#NavigationModule'
  },
  {
    path: '',
    loadChildren: 'src/app/modules/auth/auth.module#AuthModule'
  },
  {
    path:'**',
    component: PageNotFoundComponentComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 