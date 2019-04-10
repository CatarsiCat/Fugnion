import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'fugnion';
  countdown: any;
  constructor() { }

  ngOnInit() {
    const end = moment('15/10/2019', 'DD/MM/YYYY');

    setInterval(() => {
      const timeLeft = moment(end.diff(moment()));
      this.countdown =  timeLeft.format('DDD');
    }, 1000);  // A bit overkill
  }

}
