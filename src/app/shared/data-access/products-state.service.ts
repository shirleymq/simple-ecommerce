import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductService } from '../../products/data-access/products.service';
import { map } from 'rxjs';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
}
@Injectable()
export class ProductStateService {
  private productsService = inject(ProductService);
  private initialState: State = {
    products: [],
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.productsService.getProducts().pipe(
        map((products) => ({ products, status: 'success' as const })),
        map((state) => state as Partial<State>)
      ),
    ],
  });
}
