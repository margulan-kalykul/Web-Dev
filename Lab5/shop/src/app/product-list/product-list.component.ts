import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  @Input() list_id: number = 0;
  @Output() goBack = new EventEmitter<boolean>();

  products = products;
  to_show = false;

  closeList() {
    this.goBack.emit(true);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      if (chng.previousValue != undefined && chng.currentValue != 0) {
        this.to_show = true;
      }
      else if (chng.previousValue != undefined && chng.currentValue == 0) {
        this.to_show = false;
      }
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
