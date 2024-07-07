'use client';

import { useState } from 'react';
import Posts from './Posts';

const PostsWrapper = () => {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <>
      <h3>Posts</h3>
      <Posts pageIndex={pageIndex} />
      <div style={{ display: 'none' }}>
        <Posts pageIndex={pageIndex + 1} />
      </div>

      <button onClick={() => setPageIndex(pageIndex - 1)}>Prev</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </>
  );
};

export default PostsWrapper;
