import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AppointmentComponent } from "../appointment/appointment.component";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  public showView: boolean;

  constructor(public dialog: MatDialog) {
    this.showView = false;
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showView = true;
    }, 100);
  }

  onMakeAppointment() {
    this.dialog.open(AppointmentComponent);
  }
}
