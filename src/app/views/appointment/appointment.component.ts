import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.scss"],
})
export class AppointmentComponent implements OnInit {
  public contactInfo = {
    mail: "atb-first@web.de",
    phone: "+49176 71990969",
  };

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  public onCopyToClipboard(value: any): void {
    (window.navigator as any).clipboard
      .writeText(value)
      .then(() => {
        this._snackBar.open(value + " kopiert", null, {
          duration: 1000,
        });
      })
      .catch((e) => console.error(e));
  }
}
