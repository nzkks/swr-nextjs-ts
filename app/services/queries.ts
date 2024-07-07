import useSWR from 'swr';

import { Cart, Product, Todo, User } from '../types';
import { logger } from '../utils/logger';

export function useUser() {
  return useSWR<User>('/user');
}

export function useCart() {
  const { data: user } = useUser();

  return useSWR<Cart>(user ? '/cart' : null);
}

export function useProducts() {
  return useSWR<Product[]>('/products', { use: [logger] });
}

export function usePosts(pageIndex: number) {
  return useSWR(`/posts?_per_page=3&_page=${pageIndex}`);
}

export function useTodos() {
  return useSWR<Todo[]>('/todos');
}
