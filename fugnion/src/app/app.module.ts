import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ParallaxScrollModule} from "ng2-parallaxscroll";
import {MenuButtonComponent} from "./components/menu-button/menu-button.component";
import {ModalComponent} from "./components/modal/modal.component";
import {MenuModalComponent} from "./modules/modals/menu-modal/menu-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    ModalComponent,
    MenuModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParallaxScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
