import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    MainComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class MainModule { }
