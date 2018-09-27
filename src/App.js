import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './store/Reducer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import Layout from './layout/Layout';

const store = createStore(reducer, applyMiddleware(thunk));

const theme = createMuiTheme(
  {
    palette: {
      primary: blue,
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
            <Layout />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
