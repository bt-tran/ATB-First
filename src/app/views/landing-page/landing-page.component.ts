import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AppointmentComponent } from "../appointment/appointment.component";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onMakeAppointment() {
    this.dialog.open(AppointmentComponent);
  }
}
