import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddModalComponent} from './add-modal/add-modal.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {EditModalComponent} from './edit-modal/edit-modal.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';



@NgModule({
  declarations: [
    AddModalComponent,
    AdminDashboardComponent,
    AdminPanelComponent,
    EditModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
