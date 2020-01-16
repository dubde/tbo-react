import React, { useEffect, useState } from 'react';
import './App.css';
import { Post } from './models';
import usePostsApi from './hooks/posts-api.hook';

const App: React.FC = () => {
  const [posts, loaded, error, isloading] = usePostsApi();

  return (
    <div className='App'>
      <header className='App-header'>
        {(posts as Post[]).map((post: Post) => (
          <article key={post.id}>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </article>
        ))}
      </header>
    </div>
  );
};

export default App;
