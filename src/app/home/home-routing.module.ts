import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent,ContactUsComponent,HomeComponent } from './pages';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
const routes: Routes = [
  { path: '',   component: HomeComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
 
 
@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class HomeRoutingModule {}