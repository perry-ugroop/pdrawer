import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem } from 'material-ui/List';
import ThreadSection from './component/ThreadSection'
import Button from 'material-ui/Button';
import withStyles from 'material-ui/styles/withStyles';
import constants from '../../constants';
import './styles.css'

const styles = {
  commentPanel: {
    width: constants.drawerWidth - 2 * constants.commentPanelPadding,
    padding: constants.commentPanelPadding,
  },
};

class CommentPanel extends PureComponent {
  render = () => {
    const { data, classes, onClickClose } = this.props;

    const threadList = [];

    if (data && data.length) {
      for (let i = 0; i < data.length; i++) {
        let thread = data[i];

        threadList.push(
          <ListItem key={i} disableGutters>
            <ThreadSection data={thread} />
          </ListItem>
        );
      }
    }


    return (<div className={`comment-panel ${classes.commentPanel}`}>
      <div className="close-bar"><Button className="btn" disableRipple onClick={onClickClose}>[x]</Button></div>
      <section>
        <header>
          <h1>Comments</h1>
        </header>

        <List>
          { threadList }
        </List>
      </section>
    </div>);
  };
};

CommentPanel.propTypes = {
  onClickClose: PropTypes.func,
};

export default withStyles(styles)(CommentPanel);

