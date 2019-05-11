import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { PhotoZingComponent } from './photo-zing/photo-zing.component';

const routes: Routes = [
  {                              
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
     path: 'home',
     component: HomeComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'Portfolio',
    component: PortfolioComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'Photo-Outsourcing',
    component: PhotoZingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }