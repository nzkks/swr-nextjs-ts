// import OldWay from './components/OldWay';
import Cart from './components/Cart';
import PostsWrapper from './components/PostsWrapper';
import Products from './components/Products';

export default function Home() {
  return (
    <div>
      {/* <OldWay /> */}
      <PostsWrapper />
      <Products />
      <Cart />
    </div>
  );
}
