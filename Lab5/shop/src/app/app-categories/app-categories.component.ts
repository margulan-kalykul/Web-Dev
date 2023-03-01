import { Component } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-app-categories',
  templateUrl: './app-categories.component.html',
  styleUrls: ['./app-categories.component.css']
})
export class AppCategoriesComponent {
  categories = categories;
  selected = 0;

  openCategory(id: number) {
    this.selected = id;
  }

  reopen() {
    this.selected = 0;
  }
}
