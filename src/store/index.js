import { createStore } from 'vuex';

import productsModule from './modules/products';
import cartsModule from './modules/cart';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartsModule
  },
  state() {
    return {};
  }
});

export default store;
