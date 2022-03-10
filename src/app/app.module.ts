import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
