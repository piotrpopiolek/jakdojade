import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input()
  lat: number;
  @Input()
  lng: number;
  @Input()
  zoom: number;
  @Input()
  label: string;
  constructor() {}

  ngOnInit() {}
}
