import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
  ]),
  SharedModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
