import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home';
import { MaterialModule,SharedModule } from "./shared";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { LoginModule } from './login';
import { RegisterModule } from './register';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownMenuComponent } from "./shared/layouts/dropdown-menu/dropdown-menu.component";

import { authInterceptorProviders } from './helpers/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    DropdownMenuComponent, 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HomeModule,
    MaterialModule,
    SharedModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,  
    LoginModule,
    RegisterModule
  ],
  exports:[RouterModule, CommonModule, FormsModule, BrowserModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
