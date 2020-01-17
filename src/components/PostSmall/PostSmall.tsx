import React, { useState, useEffect, ReactNode } from 'react';
import { Post } from '../../models';
import useMediaApi from '../../hooks/media-api.hook';
import { ImageMedia } from '../../models/media.model';

export interface PostSmallProps {
  post: Post;
}

const PostSmall = (props: PostSmallProps) => {
  const post = props.post;

  const [featured] = useMediaApi(post.featuredMediaId);

  return (
    <article>
      <h1>{post.title}</h1>
      <img src={(featured as ImageMedia).src}></img>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </article>
  );
};

export default PostSmall;
