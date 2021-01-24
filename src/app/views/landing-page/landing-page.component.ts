import { AfterViewInit, Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { NavigationEnd, Router } from "@angular/router";
import { AppointmentComponent } from "../appointment/appointment.component";

declare let ga: Function;

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements AfterViewInit {
  public showView: boolean = false;

  constructor(public readonly router: Router, public readonly dialog: MatDialog) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showView = true;
    }, 100);
  }

  onMakeAppointment() {
    this.dialog.open(AppointmentComponent);
  }
}
