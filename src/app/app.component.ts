import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loadedFeature: string;
  title = 'app';

  private onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
