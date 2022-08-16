import { Component } from '@angular/core';

/**
 * @title Configurable slider
 */
@Component({
  selector: 'slider-configurable-example',
  templateUrl: 'slider-configurable-example.html',
  styleUrls: ['slider-configurable-example.css'],
})
export class SliderConfigurableExample {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 600;
  min = 200;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  heightValue = 200;
  vertical = false;
  tickInterval = 1;
  backgroundImageUrl = '';
  widthValue = 300;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
