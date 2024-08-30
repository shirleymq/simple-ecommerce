import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ProductStateService } from '../../../shared/data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

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

  changePage() {
    const page = this.productsState.state.page() + 1;
    this.productsState.changePages.next(page);
  }
}
