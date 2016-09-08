import { Component, Input } from '@angular/core';

import { HeroType } from '../../src/types/hero.type';

@Component({
  selector: 'my-app',
  templateUrl: '../app/src/layout/first.html'
})

export class AppComponent {
  hero: HeroType = {
    id: 1, name: 'Test'
  };

  hello() {
    this.hero.name = "hello";
  }
}