import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryPhotos = [];

  constructor() {
    this.galleryPhotos = [  // In order to avoid 'Expression has changed after it was checked'
      new CarouselMenuItem('1', 'hotel1'),
      new CarouselMenuItem('2', 'hotel2'),
      new CarouselMenuItem('3', 'hotel3'),
      new CarouselMenuItem('4', 'hotel4'),
    ];
  }

  ngOnInit() {
  }

}

export class CarouselMenuItem { // TODO move to models folder when created

  public label: string;
  public url: string;

  constructor(label: string, url: string) {
    this.label = label;
    this.url = url;
  }
}
