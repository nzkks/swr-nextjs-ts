'use client';

import { useEffect, useState } from 'react';

import { Post } from '../types';

const OldWay = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  if (!posts.length) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default OldWay;
