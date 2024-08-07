'use client';

import { ChangeEvent, useState } from 'react';

import { useProducts } from '../services/queries';
import { useCreateProduct } from '../services/mutation';

const Products = () => {
  const { data: products, isValidating } = useProducts();
  const { trigger, isMutating } = useCreateProduct();
  const [inputValue, setInputValue] = useState('');

  const handleUpdateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateProduct = async () => {
    trigger(
      { name: inputValue },
      {
        // optimisticData - data to immediately update the client cache, or a function that receives current data and returns the new client cache data, usually used in optimistic UI.
        // Simply, when triggering the mutation, immediately show the new data while creating the new data in the backend and refresh the data in the frontend.
        optimisticData: products && [...products, { name: inputValue }],
        // rollbackOnError - should the cache rollback if the remote mutation errors, or a function that receives the error thrown from fetcher as arguments and returns a boolean whether should rollback or not.
        // simply, when the mutation throws an error, rollback the cache. It means we can safely use the previous data (products) in the client cache.
        rollbackOnError: true,
      }
    );
    setInputValue('');
  };

  return (
    <div>
      <div>
        <h4>Create Products</h4>
        <input value={inputValue} onChange={handleUpdateInputValue} placeholder="Product name" />
        <button onClick={handleCreateProduct} disabled={isMutating || isValidating}>
          {isMutating || isValidating ? 'Creating...' : 'Create'}
        </button>
      </div>

      <p>All Products:</p>
      <ul>
        {products?.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
