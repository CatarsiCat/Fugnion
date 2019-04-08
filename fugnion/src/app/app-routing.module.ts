import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./components/register/register.component";
import {HotelComponent} from "./components/place/hotel/hotel.component";
import {HowtoarriveComponent} from "./components/place/howtoarrive/howtoarrive.component";
import {TouristinfoComponent} from "./components/place/touristinfo/touristinfo.component";
import {AbookComponent} from "./components/plan/art/abook/abook.component";
import {MorestuffComponent} from "./components/plan/art/morestuff/morestuff.component";
import {StuffComponent} from "./components/plan/art/stuff/stuff.component";
import {HonorguestsComponent} from "./components/plan/honorguests/honorguests.component";
import {OngComponent} from "./components/plan/ong/ong.component";
import {RulebookComponent} from "./components/plan/rulebook/rulebook.component";
import {SubmitactivityComponent} from "./components/plan/submitactivity/submitactivity.component";
import {AboutComponent} from "./components/other/about/about.component";
import {GalleryComponent} from "./components/other/gallery/gallery.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, //TODO leave appcomponent clean and move to HomeComponent in a way children routes can inherit background and stuff. EDIT: it is working for register only now. Replicate all this
    children: [
      {
        path: 'place',
        children: [
          {
            path: 'hotel',
            component: HotelComponent
          },
          {
            path: 'howtoarrive',
            component: HowtoarriveComponent
          },
          {
            path: 'touristicinfo',
            component: TouristinfoComponent
          }
        ]
      },
      {
        path: 'plan',
        children: [
          {
            path: 'art',
            children: [
              {
                path: 'abook',
                component: AbookComponent
              }
              ,
              {
                path: 'morestuff',
                component: MorestuffComponent
              }
              ,
              {
                path: 'stuff',
                component: StuffComponent
              }
            ]
          },
          {
            path: 'honorguests',
            component: HonorguestsComponent
          },
          {
            path: 'ong',
            component: OngComponent
          },
          {
            path: 'rulebook',
            component: RulebookComponent
          },
          {
            path: 'submitactivity',
            component: SubmitactivityComponent
          }
        ]
      },
      {
        path: 'other',
        children: [
          {
            path: 'about',
            component: AboutComponent
          },
          {
            path: 'touristicinfo',
            component: GalleryComponent
          }
        ]
      }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
