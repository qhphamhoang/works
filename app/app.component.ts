import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

import {Hero} from './hero';

@Component({
  selector: 'my-app',
  templateUrl: './app/html/first.html',
  directives: [NgModel]
})
export class AppComponent {
  hero: Hero = {
    id:1, name: 'Test'
  };
}

