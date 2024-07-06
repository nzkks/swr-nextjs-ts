'use client';

import { useCart } from '../services/queries';

const Cart = () => {
  const cartQuery = useCart();

  return (
    <div>
      {cartQuery.data?.products.map(product => (
        <div key={product}>{product}</div>
      ))}
    </div>
  );
};

export default Cart;
