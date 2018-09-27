import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SidemenuListItems from './Sidemenu';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import { connect } from 'react-redux';
import { onMenuClick } from '../actions/Actions';
import asyncComponent from '../hoc/AsyncComponent';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  avatar: {
    margin: 0,
  },
});


const LazyDynamicComponents = (props) => {
  const menu = props.menu;
  switch (menu) {
    case 'branches':
      const BranchCm = asyncComponent(() => {
        return import('../components/branches/Branches')
      });
      return (<BranchCm></BranchCm>);

    case 'areas': const AreaCm = asyncComponent(() => {
      return import('../components/areas/Areas')
    });
      return (<AreaCm></AreaCm>);

    case 'components': const ComponentCm = asyncComponent(() => {
      return import('../components/comps/Comps')
    });
      return (<ComponentCm></ComponentCm>);

    case 'squads': const SquadCm = asyncComponent(() => {
      return import('../components/squads/Squads')
    });
      return (<SquadCm></SquadCm>);

    case 'owners': const OwnerCm = asyncComponent(() => {
      return import('../components/owners/Owners')
    });
      return (<OwnerCm></OwnerCm>);

    default: const DefaultCom = asyncComponent(() => {
      return import('../components/branches/Branches')
    });
      return (<DefaultCom></DefaultCom>);

  }
}

class Layout extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const innerComponent = (<LazyDynamicComponents menu={this.props.menu_name}></LazyDynamicComponents>);

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container spacing={24}>
              <Grid item xs={10}>
                <Typography variant="title" color="inherit" noWrap style={{height: 40, marginTop: 15}}>
                  COHESITY
              </Typography>
              </Grid>
              <Grid item xs={2}>
                <Avatar alt="Remy Sharp" src={require('../static/images/user.svg')} className={classes.avatar} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <SidemenuListItems />
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {innerComponent}
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


const MapStateToProps = (state) => {
  return state;
}

const MapDispatchToProps = (dispatch) => {
  return {
    menuIconClick: () => dispatch(onMenuClick()),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(withStyles(styles, { withTheme: true })(Layout));