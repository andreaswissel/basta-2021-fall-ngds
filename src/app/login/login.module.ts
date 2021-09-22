import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { FormGroupModule } from '../form-group/form-group.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    FormGroupModule
  ],
  exports: [
    ButtonModule,
    InputModule,
    FormGroupModule,
    LoginComponent
  ]
})
export class LoginModule { }
