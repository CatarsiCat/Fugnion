import {Component, ElementRef, Input, OnDestroy, OnInit} from "@angular/core";
import {ModalService} from "./modal-service/modal.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'custom-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modalAnimation', [
      state('true', style({
        transform: 'translate3d(0, 0, 0)',
        visibility: 'visible'
      })),
      state('false', style({
        transform: 'translate3d(0, 100%, 0)',
        visibility: 'hidden'
      })),
      transition('0 => 1', animate('200ms ease-in-out')),
      transition('1 => 0', animate('200ms ease-in-out'))
    ]),
    trigger('bgAnimation', [
      state('true', style({
        opacity: '0.50',
        visibility: 'visible'
      })),
      state('false', style({
        opacity: '0',
        visibility: 'hidden'
      })),
      transition('0 <=> 1', animate('200ms ease'))
    ])
  ]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  element: any;
  isOpen = false;

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

    this.element.style.visibility = 'hidden';

    this.element.addEventListener('click', e => {
      console.log(e);
      if (e.target.classList.contains('custom-modal')) {
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
    //this.element.style.visibility = 'visible';
    document.body.classList.add('custom-modal-open');
    this.isOpen = true;
  }

  close() {
    //this.element.style.visibility = 'hidden';
    document.body.classList.remove('custom-modal-open');
    this.isOpen = false;
  }
}
