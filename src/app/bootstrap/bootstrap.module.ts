import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { BootstrapComponent } from "./components/bootstrap/bootstrap.component";
import { ReactiveFormsModule } from "@angular/forms";

const routes:Routes = [
  { 
    path: 'bootstrap',
    children: [
      {path: '',component: BootstrapComponent}
    ]
  }
]

@NgModule({
  declarations:[
    BootstrapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
    ],
  exports:[
    BootstrapComponent
  ],
  providers: []
})

export class BootstrapModule {}