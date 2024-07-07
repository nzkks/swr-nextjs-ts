import { usePosts } from '../services/queries';
import { Post } from '../types';

type PostsProps = {
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
};

const Posts = ({ pageIndex, setPageIndex }: PostsProps) => {
  const { data, error, isLoading } = usePosts(pageIndex);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <ul>
        {data.data?.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={() => setPageIndex(pageIndex - 1)} disabled={data.prev === null}>
        Prev
      </button>
      <button onClick={() => setPageIndex(pageIndex + 1)} disabled={data.next === null}>
        Next
      </button>
    </>
  );
};

export default Posts;
