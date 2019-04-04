import {Component, DoCheck, KeyValueDiffers, OnInit, ViewChild} from "@angular/core";
import {NgbAccordion} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "../../../components/modal/modal.component";

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss']
})
export class MenuModalComponent implements OnInit, DoCheck {
  @ViewChild('accordion') accordion: NgbAccordion;
  @ViewChild('menuModal') menuModal: ModalComponent;

  differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  ngOnInit() {
  }

  collapseAll() {
    this.accordion.collapseAll();
  }

  ngDoCheck() {
    const change = this.differ.diff(this.menuModal);
    if (change) {
      change.forEachChangedItem(item => {
        if (item.key === 'isOpen' && item.currentValue === false) {
          this.accordion.collapseAll();
        }
      });
    }
  }

}
