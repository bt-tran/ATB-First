import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.scss"],
})
export class AppointmentComponent implements OnInit {
  public contactInfo = {
    mail: "atb-first@gmail.com",
    phone: "+49 176 423544633",
  };

  constructor() {}

  ngOnInit() {}

  public onCopyToClipboard(value: any): void {
    (window.navigator as any).clipboard
      .writeText(value)
      .then()
      .catch((e) => console.error(e));
  }
}