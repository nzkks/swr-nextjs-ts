import { usePosts } from '../services/queries';
import { Post } from '../types';

const Posts = ({ pageIndex }: { pageIndex: number }) => {
  const { data, error, isLoading } = usePosts(pageIndex);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data.data?.map((post: Post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
