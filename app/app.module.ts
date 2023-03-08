import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { GenderComponent } from './pages/gender/gender.component';
import { AgeComponent } from './pages/age/age.component';
import { UniversityComponent } from './pages/university/university.component';
import { ClimateComponent } from './pages/climate/climate.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, GenderComponent, AgeComponent, UniversityComponent, ClimateComponent, AboutComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
