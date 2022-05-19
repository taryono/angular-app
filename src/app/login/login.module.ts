import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login.component';
import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  imports: [
    LoginRoutingModule, ReactiveFormsModule
  ],
  providers: [
  ],
  declarations: [LoginComponent]
})
export class LoginModule { 
 
}