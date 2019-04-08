import {Component, ViewEncapsulation} from '@angular/core';
import {IParallaxScrollConfig} from "ng2-parallaxscroll";
import {ThemeService} from "./theme/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'fugnion';


  constructor(private themeService: ThemeService) {
    //console.log(this.themeService.getActiveTheme())
  }

  parallaxConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: +.5
  };
}
