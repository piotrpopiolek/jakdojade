import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  index: number;
  @Input()
  name: string;
  @Input()
  freeBikes: number;
  @Input()
  freeRacks: number;
  @Input()
  latitude: number;
  @Input()
  longitude: number;

  showMap: boolean = false;

  handleMap() {
    this.showMap = !this.showMap;
  }

  constructor() {}

  ngOnInit() {}
}
