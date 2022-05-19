import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent,ContactUsComponent,HomeComponent } from './pages'; 

const routes: Routes = [
  { path: '',   component: HomeComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'aboutus', component: AboutUsComponent}, 
];
 
 
@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule,CommonModule, BrowserModule, FormsModule]
})
export class HomeRoutingModule {}