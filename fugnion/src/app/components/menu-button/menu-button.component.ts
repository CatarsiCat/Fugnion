import {Component, OnInit} from "@angular/core";
import {ModalService} from "../modal/modal-service/modal.service";

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  isMenuOpen = false;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
  }

  openMenu(id: string) {
    this.modalService.open(id);
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Is menu open?', this.isMenuOpen);
  }
}
