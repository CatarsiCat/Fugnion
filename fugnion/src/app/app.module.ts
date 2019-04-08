import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ParallaxScrollModule} from "ng2-parallaxscroll";
import {MenuButtonComponent} from "./components/menu-button/menu-button.component";
import {ModalComponent} from "./components/modal/modal.component";
import {MenuModalComponent} from "./modules/modals/menu-modal/menu-modal.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AccordionModule} from "primeng/primeng";

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
    ParallaxScrollModule,
    BrowserAnimationsModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
