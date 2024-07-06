'use client';

import { ChangeEvent, useState } from 'react';

import { useProducts } from '../services/queries';
import { useCreateProduct } from '../services/mutation';

const Products = () => {
  const { data: products, mutate } = useProducts();
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
      }
    );
    setInputValue('');
  };

  return (
    <div>
      <div>
        <h4>Create Products</h4>
        <input value={inputValue} onChange={handleUpdateInputValue} placeholder="Product name" />
        <button onClick={handleCreateProduct}>Create</button>
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
