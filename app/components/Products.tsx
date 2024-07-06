'use client';

import { ChangeEvent, useState } from 'react';

import { axiosInstance } from '../services/fetcher';
import { useProducts } from '../services/queries';

const Products = () => {
  const { data: products, mutate } = useProducts();

  const [inputValue, setInputValue] = useState('');

  const handleUpdateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateProduct = async () => {
    await axiosInstance.post('/products', { name: inputValue });
    mutate(); // NOT a preferred way to mutate. But this does refresh the data.
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
