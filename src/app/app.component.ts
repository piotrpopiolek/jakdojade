import { element } from 'protractor';
import { Station, Feature } from './station';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'jakdojade';
  stations;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    return this.apiService
      .getStations()
      .subscribe(data => (this.stations = data));
  }
}
