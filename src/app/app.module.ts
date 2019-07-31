import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzDropdownModule,MzSidenavModule,MzButtonModule,MzSwitchModule,MzCollapsibleModule, MzTooltipModule,MzNavbarModule, MzModalModule , MzSelectModule } from 'ngx-materialize';

import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { PhotoZingComponent } from './photo-zing/photo-zing.component';

import { TypingAnimationDirective } from 'angular-typing-animation';

import { ParticlesModule } from 'angular-particle';
import { FooterComponent } from './footer/footer.component';
import { StartedComponent } from './started/started.component';


import { CarouselModule } from 'ngx-carousels';
import { WebDevComponent } from './web-dev/web-dev.component';
import { AppDevComponent } from './app-dev/app-dev.component';
import { MobDevComponent } from './mob-dev/mob-dev.component';
import { DesAppComponent } from './des-app/des-app.component';
import { SeoDevComponent } from './seo-dev/seo-dev.component';
import { CloudComponent } from './cloud/cloud.component';


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
    WebDevComponent,
    AppDevComponent,
    MobDevComponent,
    DesAppComponent,
    SeoDevComponent,
    CloudComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MzSwitchModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MzSidenavModule,
    MzNavbarModule,
    MzCollapsibleModule,
    MzSelectModule,
    MzModalModule,
    AngularFireModule.initializeApp(environment.firebase, 'unitrix'),
    MzDropdownModule,
    MzButtonModule,
    MzTooltipModule,
    ParticlesModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
