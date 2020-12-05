import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppointmentComponent } from "./views/appointment/appointment.component";
import { InfoCompanyComponent } from "./views/landing-page/components/info-company/info-company.component";
import { InfoServiceComponent } from "./views/landing-page/components/info-service/info-service.component";
import { LandingPageComponent } from "./views/landing-page/landing-page.component";

const LandingPageComponents = [
  LandingPageComponent,
  InfoServiceComponent,
  InfoCompanyComponent,
];

const AppointmentComponents = [AppointmentComponent];

@NgModule({
  declarations: [
    AppComponent,
    ...LandingPageComponents,
    ...AppointmentComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppointmentComponent],
})
export class AppModule {}
