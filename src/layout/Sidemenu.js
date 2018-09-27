// This file is shared across the demos.

import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import ReportIcon from '@material-ui/icons/Report';

import {connect} from 'react-redux';
import {onSideMenuClick} from '../actions/Actions';

class SidemenuListItems extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
          <div>
            <ListItem button  onClick={(e) => this.props.sidemenuIconClick('branches')} >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Branches"/>
            </ListItem>
            <ListItem button   onClick={(e) => this.props.sidemenuIconClick('areas')} >
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Areas"/>
            </ListItem>
            <ListItem button onClick={(e) => this.props.sidemenuIconClick('squads')}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Squads" />
            </ListItem>
            <ListItem button  onClick={(e) => this.props.sidemenuIconClick('owners')}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Owners"/>
            </ListItem>
            <ListItem button   onClick={(e) => this.props.sidemenuIconClick('components')}>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Components" />
            </ListItem>
        </div>
        );
    }
}

const MapStateToProps = (state) => {
  return state;
}

const MapDispatchToProps = (dispatch) => {
  return {
      sidemenuIconClick : (menu) => dispatch(onSideMenuClick(menu)),
  }
}

// export default SidemenuListItems;
export default connect(MapStateToProps,MapDispatchToProps) (SidemenuListItems);