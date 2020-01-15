import React from 'react';
import Title from '../Title/Title';
import PostLayout from './PostLayout/PostLayout';
import { Post } from '../../models';

export interface PostProps {
  post: Post;
}

const postPage = (props: PostProps) => {
  const post: Post = props.post;

  return (
    <div id='content'>
      <div id='header'>
        <figure id='postFeatured'></figure>
        <Title content={post.title}></Title>
      </div>
      <PostLayout content={post.content}></PostLayout>
    </div>
  );
};

export default postPage;
