import React, { Component } from 'react';
import { Post } from '../../models';

export interface PageProps {}

export interface PageState {
  posts: Post[];
}

export class Page extends Component {
  constructor(props: PageProps) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidUpdate(prevProps: PageProps, prevState: PageState) {}

  render() {
    return <div></div>;
  }
}

export default Page;
