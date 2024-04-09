import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRestrictDirective } from './directive/input-restrict.directive';

@NgModule({
  declarations: [InputRestrictDirective],
  imports: [CommonModule],
  exports: [InputRestrictDirective]
})
export class SharedModule { }
