import React, { Component } from 'react';

export interface MenuProps {
  routes: [];
  activeRoute?: '';
}

export class Menu extends Component {
  constructor(props: object) {
    super(props);

    this.state = {
      activeRoute: '',
    };
  }

  render() {
    return (
      <nav>
        <button></button>
      </nav>
    );
  }
}
