import useSWRMutation from 'swr/mutation';

import { useProducts } from './queries';
import { createProduct } from './api';

export function useCreateProduct() {
  const { mutate } = useProducts();

  // return useSWRMutation('/products', (url, arg) => createProduct(url, arg)); // url is '/products'
  return useSWRMutation('/products', createProduct, {
    onError(err, key, config) {
      // key = '/products'
      console.error('Failed to create product:', err);
    },
    onSuccess(data, key, config) {
      // key = '/products'
      mutate();
    },
  }); // simple
}
