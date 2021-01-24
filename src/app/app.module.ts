import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatProgressBarModule
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

@NgModule({
  declarations: [AppComponent, ...LandingPageComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppointmentComponent],
})
export class AppModule {}
