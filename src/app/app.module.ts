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

import { MzSidenavModule,MzButtonModule,MzSwitchModule,MzCollapsibleModule, MzTooltipModule,MzNavbarModule, MzModalModule , MzSelectModule } from 'ngx-materialize';

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
    HttpClientModule,
    
    ReactiveFormsModule,
    MzSwitchModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzSidenavModule,
    MzNavbarModule,
    MzCollapsibleModule,
    MzSelectModule,
    MzModalModule,
    AngularFireModule.initializeApp(environment.firebase, 'unitrix'),
    
    MzButtonModule,
    MzTooltipModule,
    ParticlesModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
