import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ParallaxScrollModule} from "ng2-parallaxscroll";
import { MenuButtonComponent } from './custom/menu-button/menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParallaxScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
