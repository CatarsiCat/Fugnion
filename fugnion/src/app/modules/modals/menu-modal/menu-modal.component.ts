import {Component, DoCheck, KeyValueDiffers, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "../../../components/modal/modal.component";
import {MenuItem} from "primeng/api";
import {ModalService} from "../../../components/modal/modal-service/modal.service";

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

  constructor(private differs: KeyValueDiffers, private modalService: ModalService) {
    this.differ = this.differs.find({}).create(); // Delete if not needed at the end
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-pw pi-home',
        routerLink: ['/'],
        command: () => this.closeMenuModal()
      },
      {
        label: 'Place',
        items: [
          {
            label: 'Hotel',
            routerLink: ['place/hotel'],
            command: () => this.closeMenuModal()
          },
          {
            label: 'How to arrive',
            routerLink: ['place/howtoarrive'],
            command: () => this.closeMenuModal()
          },
          {
            label: 'Tourist info',
            routerLink: ['place/touristicinfo'],
            command: () => this.closeMenuModal()
          }
        ]
      },
      {
        label: 'Register',
        icon: 'pi pi-fw pi-user-plus',
        routerLink: ['/register'],
        command: () => this.closeMenuModal()
      },
      {
        label: 'THE PLAN',
        items: [
          {
            label: 'Rulebook',
            routerLink: ['plan/rulebook'],
            command: () => this.closeMenuModal()
          },
          {
            label: 'Suggest activity',
            routerLink: ['plan/submitactivity'],
            command: () => this.closeMenuModal()
          },
          {
            label: 'Guests of honor',
            routerLink: ['plan/honorguests'],
            command: () => this.closeMenuModal()
          },
          {
            label: 'ONG',
            routerLink: ['plan/ong'],
            command: () => this.closeMenuModal()
          },
          {
            label: 'Art',
            items: [
              {
                label: 'Stuff',
                routerLink: ['plan/art/stuff'],
                command: () => this.closeMenuModal()
              },
              {
                label: 'More stuff',
                routerLink: ['plan/art/morestuff'],
                command: () => this.closeMenuModal()
              },
              {
                label: 'A book',
                icon: 'pi pi-fw pi-file',
                routerLink: ['plan/art/abook'],
                command: () => this.closeMenuModal()
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
            routerLink: ['other/gallery'],
            command: () => this.closeMenuModal()
          },
          {
            label: 'About',
            routerLink: ['other/about'],
            command: () => this.closeMenuModal()
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

  closeMenuModal() {
    this.modalService.close('menu');
    this.closeAllSubmenus();
  }

  closeAllSubmenus() {
    for (const i of this.items) {
      i.expanded = false;
      if (i.items) {
        for (const j of this.items) {
          j.expanded = false;
        }
      }
    }
  }
}
