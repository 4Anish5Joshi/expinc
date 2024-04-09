import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TrackerComponent } from './tracker.component';
import { HighlightDirective } from '../directive/highlight.directive';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  { path: '', component: TrackerComponent, },
];

@NgModule({
  declarations: [TrackerComponent, HighlightDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TrackerModule { }
