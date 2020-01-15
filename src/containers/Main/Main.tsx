import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import { Post } from '../../models';
import BlogPost from '../../components/BlogPost/BlogPost';

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export interface MainProps {
  posts: Post[];
  title: string;
}

export default function Main(props: MainProps) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post: Post) => (
        <BlogPost key={post.id + ''} post={post}></BlogPost>
      ))}
    </Grid>
  );
}
