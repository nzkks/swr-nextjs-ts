'use client';

import { ChangeEvent, useState } from 'react';

import { axiosInstance } from '../services/fetcher';
import { useProducts } from '../services/queries';

const Products = () => {
  const [inputValue, setInputValue] = useState('');

  const handleUpdateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateProduct = async () => {
    await axiosInstance.post('/products', { name: inputValue });

    setInputValue('');
  };

  const productQuery = useProducts();

  if (productQuery.isLoading) return <div>Loading...</div>;
  if (productQuery.error) return <div>Error</div>;

  return (
    <div>
      <div>
        <h4>Create Products</h4>
        <input value={inputValue} onChange={handleUpdateInputValue} placeholder="Product name" />
        <button onClick={handleCreateProduct}>Create</button>
      </div>

      <p>All Products:</p>
      <ul>
        {productQuery.data?.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
