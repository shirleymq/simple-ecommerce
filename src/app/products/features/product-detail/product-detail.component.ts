import { Component, effect, input, inject } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {
  id = input.required<string>();
  productDetailState = inject(ProductDetailStateService).state;
  cartState = inject(CartStateService).state;

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });
  }
}
