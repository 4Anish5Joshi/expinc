import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { VisualizationComponent } from './visualization.component';
import { SavingModalComponent } from '../saving-modal/saving-modal.component';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  { path: '', component: VisualizationComponent },
];

@NgModule({
  declarations: [VisualizationComponent, SavingModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    SharedModule
  ]
})
export class VisualizationModule { }
