import { Component, effect, input, inject } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';

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

  constructor() {
    effect(() => {
      console.log(this.id());
      this.productDetailState.getById(this.id());
    });
  }
}
