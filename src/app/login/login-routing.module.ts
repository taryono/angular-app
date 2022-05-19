import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './components/login.component'; 

const routes: Routes = [ 
  { path: 'login', component: LoginComponent }, 
]; 
@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule,CommonModule, BrowserModule, FormsModule]
})
export class LoginRoutingModule {}