import React, { PureComponent } from 'react';
import List, { ListItem } from 'material-ui/List';
import ThreadSection from './component/ThreadSection'
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
    const { data, classes } = this.props;

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

export default withStyles(styles)(CommentPanel);

