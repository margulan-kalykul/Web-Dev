import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Product } from '../products';
import { LikesService } from '../likes.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;
  like_num!: number;
  is_removed!: boolean;

  constructor (
    private likes: LikesService
  ) {
  }

  ngOnInit(): void {
    if (this.product != undefined) {
      this.like_num = this.likes.getLikes(this.product.id);
      this.is_removed = false;
    }
  }

  incrementLikes() {
    if (this.product != undefined)
      this.likes.increment(this.product.id);
    this.like_num++;
  }

  removeProduct() {
    this.is_removed = true;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}