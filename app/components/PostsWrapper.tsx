'use client';

import { useState } from 'react';
import Posts from './Posts';

const PostsWrapper = () => {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <>
      <h3>Posts</h3>
      <Posts pageIndex={pageIndex} setPageIndex={setPageIndex} />
      <div style={{ display: 'none' }}>
        <Posts pageIndex={pageIndex + 1} setPageIndex={setPageIndex} />
      </div>
    </>
  );
};

export default PostsWrapper;
