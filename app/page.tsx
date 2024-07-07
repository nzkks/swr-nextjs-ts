// import OldWay from './components/OldWay';
import Cart from './components/Cart';
import Posts from './components/Posts';
import Products from './components/Products';

export default function Home() {
  return (
    <div>
      {/* <OldWay /> */}
      <Posts />
      <Products />
      <Cart />
    </div>
  );
}
