import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { DashboardComponent, RightsComponent, UserComponent } from './admin';

import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'user', component:UserComponent},
  {path:'rights', component:RightsComponent},
  {path: 'dashboard', component:DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
