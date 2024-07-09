import useSWR from 'swr';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';

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
  const getKey: SWRInfiniteKeyLoader = (index: number, previousPageData: Todo[]) => {
    if (previousPageData && !previousPageData.length) return null;

    const url = `https://jsonplaceholder.typicode.com/todos?_page=${index + 1}&_limit=2`;
    return url;
  };

  return useSWRInfinite<Todo[]>(getKey);
}
