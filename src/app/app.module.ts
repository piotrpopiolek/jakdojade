import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, MapComponent, ListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFi0-Xtq0OYE2v0_Pq4qlrsZJ-CeC3HUI'
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
