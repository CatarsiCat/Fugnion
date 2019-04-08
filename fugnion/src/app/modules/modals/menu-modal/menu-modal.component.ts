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
      },
      {
        label: 'Place',
        items: [
          {label: 'Hotel'},
          {label: 'How to arrive'},
          {label: 'Tourist info'}
        ]
      },
      {
        label: 'Register',
        icon: 'pi pi-fw pi-user-plus',
      },
      {
        label: 'THE PLAN',
        items: [
          {
            label: 'Rulebook',
          },
          {
            label: 'Suggest activity',
          },
          {
            label: 'Guests of honor',
          },
          {
            label: 'ONG',
          },
          {
            label: 'Art',
            items: [
              {
                label: 'Stuff',
              },
              {
                label: 'More stuff',
              },
              {
                label: 'A book',
                icon: 'pi pi-fw pi-file',
              }
            ]}
        ]
      },
      {
        label: 'Other',
        items: [
          {
            label: 'Gallery',
          },
          {
            label: 'About',
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
