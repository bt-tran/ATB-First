import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { LandingPageComponent } from "./landing-page.component";
import { InfoServiceComponent } from './components/info-service/info-service.component';
import { InfoCompanyComponent } from './components/info-company/info-company.component';

@NgModule({
  declarations: [LandingPageComponent, InfoServiceComponent, InfoCompanyComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
