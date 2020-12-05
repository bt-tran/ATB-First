import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./views/landing-page/landing-page.component";
import { LandingPageModule } from "./views/landing-page/landing-page.module";

const PathModules = [LandingPageModule];

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [, ...PathModules, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
