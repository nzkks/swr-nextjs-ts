'use client';

import { useProducts } from '../services/queries';

const Products = () => {
  const productQuery = useProducts();

  if (productQuery.isLoading) return <div>Loading...</div>;
  if (productQuery.error) return <div>Error</div>;

  return (
    <div>
      <p>Products:</p>
      <ul>
        {productQuery.data?.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
