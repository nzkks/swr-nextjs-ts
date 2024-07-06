import useSWR from 'swr';

import { Cart, User } from '../types';

export function useUser() {
  return useSWR<User>('/user');
}

export function useCart() {
  return useSWR<Cart>('/cart');
}
