import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare const ymaps: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    map: any;

    constructor() {
    }

    public ngOnInit(): void {
      ymaps.ready(() => {
        this.map = new ymaps.Map('mapContainer', {
          center: [55.76, 37.64],
          zoom: 10
        });
      });
    }
}
