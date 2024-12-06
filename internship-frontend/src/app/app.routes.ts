import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { CardDetailComponent } from './components/pages/card-detail/card-detail.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LandingPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'pokemon/:id', component: CardDetailComponent },
];
