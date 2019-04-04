import {Component, ElementRef, Input, OnDestroy, OnInit} from "@angular/core";
import {ModalService} from "./modal-service/modal.service";

@Component({
  selector: 'custom-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    const modal = this;

    if (!this.id) {
      console.error('Modal must have an id');
      return;
    }

    document.body.appendChild(this.element); //So it's always visible

    this.element.style.display = 'none';

    this.element.addEventListener('click', e => {
      if (e.target.className === 'custom-modal') {
        modal.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy() {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open() {
    this.element.style.display = 'block';
    document.body.classList.add('custom-modal-open');
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('custom-modal-open');
  }
}
