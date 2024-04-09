import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared.module'; 
import { SavingModalComponent } from './saving-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SavingModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    SharedModule,
    FormsModule
  ]
})
export class SavingModalModule { }
