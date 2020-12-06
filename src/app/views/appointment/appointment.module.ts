import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
} from "@angular/material";
import { AppointmentComponent } from "./appointment.component";

@NgModule({
  declarations: [AppointmentComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  exports: [AppointmentComponent],
})
export class AppointmentModule {}
