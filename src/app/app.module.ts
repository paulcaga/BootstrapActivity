import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
