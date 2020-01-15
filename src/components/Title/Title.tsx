import React from 'react';
import classes from './Title.css';

export interface TitleProps {
  content: string;
}
const title = (props: TitleProps) => {
  const titleText = props.content;

  return <h1 className={classes.Title}>{titleText}</h1>;
};

export default title;
