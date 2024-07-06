'use client';

import { useCart, useUser } from '../services/queries';

const Cart = () => {
  const userQuery = useUser();
  const cartQuery = useCart();

  return (
    <div>
      <div>
        {userQuery.isLoading ? (
          'Loading user data...'
        ) : (
          <div>
            User name: <b>{userQuery.data?.userName}</b>
          </div>
        )}
      </div>
      <br />
      <div>Cart products:</div>
      {cartQuery.data?.products.map(product => (
        <div key={product}>{product}</div>
      ))}
    </div>
  );
};

export default Cart;
