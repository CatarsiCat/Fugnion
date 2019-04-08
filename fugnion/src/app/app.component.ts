import { Component } from '@angular/core';
import {IParallaxScrollConfig} from "ng2-parallaxscroll";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: +.5
  };
}
