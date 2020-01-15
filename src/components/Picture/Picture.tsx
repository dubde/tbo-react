import React from 'react';

export interface PictureProps {
  src: string;
  width: string;
  height: string;
}

const picture = (props: PictureProps) => {
  return <img src={props.src}></img>;
};

export default picture;
