import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputModule } from '../input/input.module';
import { FormGroupComponent } from './form-group.component';



@NgModule({
  declarations: [
    FormGroupComponent
  ],
  imports: [
    CommonModule,
    InputModule
  ],
  exports: [
    InputModule,
    FormGroupComponent
  ]
})
export class FormGroupModule { }
