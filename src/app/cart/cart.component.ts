import { Component, inject } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { CartStateService } from '../shared/data-access/cart-state.service';
import { ProductItemCart } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styles: ``,
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(id: number) {
    this.state.remove(id);
  }

  onIncrease(productCart: ProductItemCart) {
    this.state.update({
      product: productCart.product,
      quantity: productCart.quantity + 1,
    });
  }

  onDecrease(productCart: ProductItemCart) {
    this.state.update({
      product: productCart.product,
      quantity: productCart.quantity - 1,
    });
  }
}
