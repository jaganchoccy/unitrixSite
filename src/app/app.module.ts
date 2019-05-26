import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzSidenavModule ,MzButtonModule } from 'ngx-materialize';

import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { PhotoZingComponent } from './photo-zing/photo-zing.component';

import { TypingAnimationDirective } from 'angular-typing-animation';

import { ParticlesModule } from 'angular-particle';
import { FooterComponent } from './footer/footer.component';
import { StartedComponent } from './started/started.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ServiceComponent,
    PortfolioComponent,
    TeamComponent,
    PhotoZingComponent,
    TypingAnimationDirective,
    FooterComponent,
    StartedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzSidenavModule,
    MzButtonModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
