import React from 'react';

export interface PostLayoutProps {
  content: string;
}

const postLayout = (props: PostLayoutProps) => {
  return (
    <article>
      <div className='entryMeta'></div>
      <div className='entryContent'>{props.content}</div>
    </article>
  );
};

export default postLayout;
