import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

// import logo from './logo.svg';
// import classes from './App.css';
// import  Layout  from './layout/Layout';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import  MainLayout from './layout/MainLayout';

const store = createStore(reducer, applyMiddleware(thunk));

const theme = createMuiTheme(
  {
    palette: {
      primary: purple,
      secondary: green,
    },
    status: {
      danger: 'orange',
    },
  }
);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
        <div>
        {/* <Layout>
          <p className={classes.blinking}>Check the Layout.js</p>
        </Layout> */}

        <MainLayout/>
      
        </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
