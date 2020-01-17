import React, { useEffect, useState } from 'react';
import './App.css';
import { Post } from './models';
import usePostsApi from './hooks/posts-api.hook';
import useMediaApi from './hooks/media-api.hook';
import { ImageMedia } from './models/media.model';
import PostSmall from './components/PostSmall/PostSmall';
import { Container, Grid, makeStyles, Paper, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  const [posts] = usePostsApi();

  return (
    <React.Fragment>
      <Container fixed>
        <header>The Big O Blog</header>
        <main>
          <Grid
            spacing={5}
            className={classes.mainGrid}
            container
            direction='row'
            justify='center'
            alignItems='center'
          >
            {(posts as Post[]).map((post: Post, index: number) => (
              <Grid item xs={3}>
                <PostSmall key={post.id} post={post}></PostSmall>
              </Grid>
            ))}
          </Grid>
        </main>
      </Container>
      <footer>Copyright</footer>
    </React.Fragment>
  );
};

export default App;
