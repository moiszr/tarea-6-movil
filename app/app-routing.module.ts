import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GenderComponent } from './pages/gender/gender.component';
import { AgeComponent } from './pages/age/age.component';
import { UniversityComponent } from './pages/university/university.component';
import { ClimateComponent } from './pages/climate/climate.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gender',
    component: GenderComponent,
  },
  {
    path: 'age',
    component: AgeComponent,
  },
  {
    path: 'university',
    component:UniversityComponent,
  },
  {
    path: 'climate',
    component:ClimateComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
