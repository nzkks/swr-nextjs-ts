// import OldWay from './components/OldWay';
import Cart from './components/Cart';
import PostsWrapper from './components/PostsWrapper';
import Products from './components/Products';
import Todos from './components/Todos';

export default function Home() {
  return (
    <div>
      {/* <OldWay /> */}
      <PostsWrapper />
      <Products />
      <Cart />
      <Todos />
    </div>
  );
}
