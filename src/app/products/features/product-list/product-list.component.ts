import { Component, inject } from '@angular/core';
import { ProductStateService } from '../../data-access/products-state.service';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductStateService],
})
export default class ProductListComponent {
  productsState = inject(ProductStateService);
  cartState = inject(CartStateService).state;

  changePage() {
    const page = this.productsState.state.page() + 1;
    this.productsState.changePages.next(page);
  }

  addToCartF(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }
}
