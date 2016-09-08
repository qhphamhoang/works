import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../../src/layout/about/about.component';
import { ExperimentsComponent } from '../../src/layout/experiments/experiments.component';
import { HomeComponent } from '../../src/layout/home/home.component';
import { StateService } from '../../src/layout/common/state.service';
import { ExperimentsService } from '../../src/layout/common/experiments.service';

const appRoutes: Routes = [
  { path: '/', component: HomeComponent }
//   { path: '/home', component: HomeComponent },
//   { path: '/about', component: AboutComponent },
//   { path: '/experiments', component: ExperimentsComponent },
//   { path: '/*', component: HomeComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);