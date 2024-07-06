import useSWR from 'swr';

import { Cart, Product, User } from '../types';

export function useUser() {
  return useSWR<User>('/user');
}

export function useCart() {
  const { data: user } = useUser();

  return useSWR<Cart>(user ? '/cart' : null);
}

export function useProducts() {
  return useSWR<Product[]>('/products');
}
