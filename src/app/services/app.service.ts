import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../interfaces/joke.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public joke: string = '';
  constructor(private http: HttpClient) {
    this.getJoke()
  }

  getJoke(): void {
    this.http
      .get<Joke>('https://icanhazdadjoke.com', {
        headers: { Accept: 'application/json' },
      })
      .subscribe((resp) => (this.joke = resp.joke));
  }
}
