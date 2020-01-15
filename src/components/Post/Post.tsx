import React from 'react';
import Title from '../Title/Title';

export interface PostProps {
  content: string;
  title: string;
  featuredPictureUrl: string;
  comments?: [];
}

const postPage = (props: PostProps) => {
  return (
    <div id='content'>
      <div id='header'>
        <figure id='postFeatured'></figure>
        <Title content={props.title}></Title>
      </div>
    </div>
  );
};

export default postPage;
