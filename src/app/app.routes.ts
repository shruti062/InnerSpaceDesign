import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Projects } from './pages/projects/projects';
import { Clients } from './pages/clients/clients';
import { Contact } from './pages/contact/contact';
import { ServicesCard } from './components/services-card/services-card';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'services-card', component: ServicesCard}, 
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  { path: 'clients', component: Clients },
  { path: 'contact', component: Contact }
];


