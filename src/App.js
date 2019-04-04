import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Products from './Products';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Products></Products>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
