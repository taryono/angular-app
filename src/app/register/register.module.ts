import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './components/register.component';
import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  imports: [
    RegisterRoutingModule, ReactiveFormsModule
  ],
  providers: [
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { 
 
}