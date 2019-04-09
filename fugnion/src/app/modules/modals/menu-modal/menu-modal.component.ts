import {Component, DoCheck, KeyValueDiffers, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "../../../components/modal/modal.component";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss']
})
export class MenuModalComponent implements OnInit, DoCheck {
  @ViewChild('menuModal') menuModal: ModalComponent;
  index: number = null;
  subIndex: number = null;
  lastIndex = -1;
  items: MenuItem[];
  differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-pw pi-home',
        url: '/'
      },
      {
        label: 'Place',
        items: [
          {
            label: 'Hotel',
            url: 'place/hotel'
          },
          {
            label: 'How to arrive',
            url: 'place/howtoarrive'
          },
          {
            label: 'Tourist info',
            url: 'place/touristicinfo'
          }
        ]
      },
      {
        label: 'Register',
        icon: 'pi pi-fw pi-user-plus',
        url: '/register'
      },
      {
        label: 'THE PLAN',
        items: [
          {
            label: 'Rulebook',
            url: 'plan/rulebook'
          },
          {
            label: 'Suggest activity',
            url: 'plan/submitactivity'
          },
          {
            label: 'Guests of honor',
            url: 'plan/honorguests'
          },
          {
            label: 'ONG',
            url: 'plan/ong'
          },
          {
            label: 'Art',
            items: [
              {
                label: 'Stuff',
                url: 'plan/art/stuff'
              },
              {
                label: 'More stuff',
                url: 'plan/art/morestuff'
              },
              {
                label: 'A book',
                icon: 'pi pi-fw pi-file',
                url: 'plan/art/abook'
              }
            ]
          }
        ]
      },
      {
        label: 'Other',
        items: [
          {
            label: 'Gallery',
            url: 'other/gallery'
          },
          {
            label: 'About',
            url: 'other/about'
          }
        ]
      }
    ];
  }

  ngDoCheck() {
    const change = this.differ.diff(this.menuModal);
    if (change) {
      change.forEachChangedItem(item => {
        if (item.key === 'isOpen' && item.currentValue === false) {
          this.index = this.subIndex = this.lastIndex--;
        }
      });
    }
  }

}
