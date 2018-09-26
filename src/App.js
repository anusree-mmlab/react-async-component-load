import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
// import  Layout  from './layout/Layout';

import  MainLayout from './layout/MainLayout';



class App extends Component {
  render() {
    return (
      <div>
      {/* <Layout>
        <p className={classes.blinking}>Check the Layout.js</p>
      </Layout> */}

      <MainLayout/>
     
      </div>
    );
  }
}

export default App;
