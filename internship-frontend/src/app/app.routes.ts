import { Routes } from '@angular/router';
import { Nav1Component } from './components/pages/nav-1/nav-1.component';
import { Nav2Component } from './components/pages/nav-2/nav-2.component';
import { Nav3Component } from './components/pages/nav-3/nav-3.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { CardDetailComponent } from './components/pages/card-detail/card-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LandingPageComponent },
    { path: 'nav-1', component: Nav1Component },
    { path: 'nav-2', component: Nav2Component },
    { path: 'nav-3', component: Nav3Component },
    { path: 'pokemon/:id', component: CardDetailComponent },
];
