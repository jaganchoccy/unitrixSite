import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { PhotoZingComponent } from './photo-zing/photo-zing.component';
import { StartedComponent } from './started/started.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { MobDevComponent } from './mob-dev/mob-dev.component';
import { SeoDevComponent } from './seo-dev/seo-dev.component';
import { AppDevComponent } from './app-dev/app-dev.component';
import { DesAppComponent } from './des-app/des-app.component';
import { XploreComponent } from './xplore/xplore.component';


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
    path: 'Xplore',
    component: XploreComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'Photo-Outsourcing',
    component: PhotoZingComponent
  },
  {
    path: 'Get-started',
    component: StartedComponent
  },
  {
    path: 'UI-Development',
    component: WebDevComponent
  },
  {
    path: 'App-Development',
    component: AppDevComponent
  },
  {
    path: 'Desktop-Development',
    component: DesAppComponent
  },
  {
    path: 'Mobile-Development',
    component: MobDevComponent
  },
  {
    path: 'seo',
    component: SeoDevComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
