import React, { useEffect, useState } from 'react';
import './App.css';
import { Post } from './models';
import usePostsApi from './hooks/posts-api.hook';
import useMediaApi from './hooks/media-api.hook';
import { ImageMedia } from './models/media.model';
import PostSmall from './components/PostSmall/PostSmall';

const App: React.FC = () => {
  const [posts] = usePostsApi();

  return (
    <div className='App'>
      <header className='App-header'>
        {(posts as Post[]).map((post: Post, index: number) => (
          <PostSmall key={post.id} post={post}></PostSmall>
        ))}
      </header>
    </div>
  );
};

export default App;
