import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RMDrawer from 'react-motion-drawer';
import MuiDrawer from 'material-ui/Drawer';
import constants from '../../constants';

class UGDrawer extends PureComponent {
  render = () => {
    const { drawerClass, children, open, onChange, onRequestClose } = this.props;

    let ret = (<div />);

    if (drawerClass === 'react-motion-drawer') {
      ret = (
        <RMDrawer
            width={constants.drawerWidth}
            open={open}
            right
            onChange={onChange}
            drawerStyle={{ backgroundColor: '#fff' }}
	          noTouchClose
            handleWidth={0}
          >
          {children}
        </RMDrawer>
      );
    } else if (drawerClass === 'material-ui') {
      ret = (
        <MuiDrawer
          type="persistent"
          anchor="right"
          open={open}
          onRequestClose={onRequestClose}
        >
          {children}
        </MuiDrawer>
      );
    }

    return ret;
  };

}

UGDrawer.propTypes = {
  drawerClass: PropTypes.string,
  children: PropTypes.object,
  open: PropTypes.func,
  onChange: PropTypes.func,
  onRequestClose: PropTypes.func,
};

export default UGDrawer;

