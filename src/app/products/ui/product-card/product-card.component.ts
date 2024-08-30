import { Component, Input, input } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  @Input() product!: Product;
  //product = input.required<string>();
}
