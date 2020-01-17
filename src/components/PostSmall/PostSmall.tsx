import React, { useState, useEffect, ReactNode } from 'react';
import { Post } from '../../models';
import useMediaApi from '../../hooks/media-api.hook';
import { ImageMedia } from '../../models/media.model';
import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
} from '@material-ui/core';

export interface PostSmallProps {
  post: Post;
}

const PostSmall = (props: PostSmallProps) => {
  const post = props.post;

  // const [featured] = useMediaApi(post.featuredMediaId);
  const featured = '';

  return (
    <Card>
      <CardActionArea>
        <CardMedia image={''}></CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {post.title}
          </Typography>
          <Typography variant='body2' component='div'>
            {post.content.slice(0, 200)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Continue Reading...
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostSmall;
