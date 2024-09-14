import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: 'privacy', component: PrivacyComponent},
    { path: 'imprint', component: ImprintComponent}
];
