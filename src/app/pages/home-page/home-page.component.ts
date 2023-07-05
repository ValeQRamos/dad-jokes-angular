import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private appService: AppService) {}

  get joke() {
    return this.appService.joke;
  }

  getJoke(): void {
    this.appService.getJoke();
  }
}
