import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AppointmentComponent } from "src/app/views/appointment/appointment.component";

@Component({
  selector: "app-info-company",
  templateUrl: "./info-company.component.html",
  styleUrls: ["./info-company.component.scss"],
})
export class InfoCompanyComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onMakeAppointment() {
    this.dialog.open(AppointmentComponent);
  }
}
