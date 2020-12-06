import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AppointmentModule } from "./views/appointment/appointment.module";
import { LandingPageComponent } from "./views/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },
  { path: "**", component: LandingPageComponent },
];

@NgModule({
  imports: [
    AppointmentModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
