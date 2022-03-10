import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PhoneListComponent } from './phone-list/phone-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/phone-list', pathMatch: 'full' },
  
  { path: 'phone-list', component: PhoneListComponent },
  { path: 'details/:id', component: PhoneDetailComponent }

];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
