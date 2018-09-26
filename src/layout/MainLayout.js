import React from 'react';
import MaterialLayout  from './MaterialLayout';
import AppBar  from './Appbar';
import classes from '../App.css';
import withSibling from '../hoc/SiblingComponent';

const MLayout = () => {
    return (
      <MaterialLayout>
      <p className={classes.blinking}>Check the Layout.js</p>
      </MaterialLayout>
    )
  }

export default withSibling(AppBar, MLayout);