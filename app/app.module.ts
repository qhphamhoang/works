import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';

import {AppComponent} from './src/components/app.component';
import { routing, appRoutingProviders } from './src/components/app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, routing ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRoutingProviders ]
})
export class AppModule { }