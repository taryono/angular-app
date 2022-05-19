import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { RegisterComponent } from './components/register.component';

const routes: Routes = [ 
  { path: 'register', component: RegisterComponent }, 
]; 
@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule,CommonModule, BrowserModule, FormsModule]
})
export class RegisterRoutingModule {}