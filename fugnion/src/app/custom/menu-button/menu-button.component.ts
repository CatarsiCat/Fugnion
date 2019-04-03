import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  isMenuOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Is menu open?', this.isMenuOpen);
  }
}
