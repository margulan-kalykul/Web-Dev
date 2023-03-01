import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  likes: number[] = [];

  constructor() {
    this.likes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  increment(id: number) {
    this.likes[id-1]++;
  }

  getLikes(id: number) {
    return this.likes[id-1];
  }
}
