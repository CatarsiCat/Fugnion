import {Component, DoCheck, KeyValueDiffers, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "../../../components/modal/modal.component";

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

  differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  ngOnInit() {
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
