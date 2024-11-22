import {RouterModule, Routes} from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './maincontent/main.component';
import { ContactComponent } from './maincontent/contact/contact.component';
import {NgModule} from "@angular/core";
import {AboutmeComponent} from "./maincontent/aboutme/aboutme.component";
import {SkillsComponent} from "./maincontent/skills/skills.component";
import {PortfolioComponent} from "./maincontent/portfolio/portfolio.component";
import {HeaderComponent} from "./shared/header/header.component";
import {TranslatePipe} from "./pipes/translate.pipe";


export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'privacy', component: PrivacyComponent},
    { path: 'imprint', component: ImprintComponent},
    { path: 'contact', component: ContactComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  {path: 'header', component: HeaderComponent}


];

@NgModule({
  declarations: [

    TranslatePipe, // Registriere die Pipe
  ],
  exports: [RouterModule, TranslatePipe],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})]
})
export class AppRoutingModule { }
