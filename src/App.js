import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import  Layout  from './layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <p className={classes.blinking}>Check the Layout.js</p>
      </Layout>
    );
  }
}

export default App;
