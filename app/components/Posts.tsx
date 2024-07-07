'use client';

import { usePosts } from '../services/queries';

const Posts = () => {
  const { data, error, isLoading } = usePosts();

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h3>Posts</h3>
      <ul>
        {data?.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
