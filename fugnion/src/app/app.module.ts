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
import {AccordionModule, PanelMenuModule} from "primeng/primeng";
import { RegisterComponent } from './components/register/register.component';
import { HotelComponent } from './components/palce/hotel/hotel.component';
import { HowtoarriveComponent } from './components/palce/howtoarrive/howtoarrive.component';
import { TouristinfoComponent } from './components/palce/touristinfo/touristinfo.component';
import { RulebookComponent } from './components/plan/rulebook/rulebook.component';
import { SubmitactivityComponent } from './components/plan/submitactivity/submitactivity.component';
import { HonorguestsComponent } from './components/plan/honorguests/honorguests.component';
import { OngComponent } from './components/plan/ong/ong.component';
import { StuffComponent } from './components/plan/art/stuff/stuff.component';
import { MorestuffComponent } from './components/plan/art/morestuff/morestuff.component';
import { AbookComponent } from './components/plan/art/abook/abook.component';
import { GalleryComponent } from './components/other/gallery/gallery.component';
import { AboutComponent } from './components/other/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    ModalComponent,
    MenuModalComponent,
    RegisterComponent,
    HotelComponent,
    HowtoarriveComponent,
    TouristinfoComponent,
    RulebookComponent,
    SubmitactivityComponent,
    HonorguestsComponent,
    OngComponent,
    StuffComponent,
    MorestuffComponent,
    AbookComponent,
    GalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParallaxScrollModule,
    BrowserAnimationsModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
