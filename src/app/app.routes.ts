import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './maincontent/main.component';
import { ContactComponent } from './maincontent/contact/contact.component';


export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'privacy', component: PrivacyComponent},
    { path: 'imprint', component: ImprintComponent},
    { path: 'contact', component: ContactComponent },

];
