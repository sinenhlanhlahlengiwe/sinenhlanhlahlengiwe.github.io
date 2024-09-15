import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PortfoliopageComponent } from './components/portfoliopage/portfoliopage.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home',pathMatch: 'full'},
    {path: 'home', component: HomepageComponent},
    {path: 'about', component: AboutpageComponent},
    {path: 'portfolio', component: PortfoliopageComponent},
    {path: 'contact', component: ContactpageComponent},
    {path: '**', component: PagenotfoundComponent}
];
