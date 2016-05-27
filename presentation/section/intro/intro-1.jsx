import React, { Component } from 'react';
import { Slide, List, ListItem, Appear } from 'spectacle';

export default class Intro extends Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <List>
          <Appear><ListItem>Webpack and NPM</ListItem></Appear>
          <Appear><ListItem>Babel</ListItem></Appear>
          <Appear><ListItem>ES5-ES6/7</ListItem></Appear>
          <Appear><ListItem>Hot Module Replacement</ListItem></Appear>
          <Appear><ListItem>React</ListItem></Appear>
        </List>
      </Slide>
    );
  }
}