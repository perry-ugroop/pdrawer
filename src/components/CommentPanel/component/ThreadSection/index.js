import React, { PureComponent } from 'react';
import moment from 'moment';
import withStyles from 'material-ui/styles/withStyles';
import constants from '../../../../constants';
import './styles.css';

const borderWidth = 1;
const spacerWidth = 6;
const avatarSize = 28;

const styles = {
  avatar: {
    width: avatarSize,
    height: avatarSize,
    lineHeight: `${avatarSize}px`,
    border: ['solid', borderWidth, '#c0c0c0'],
  },
  author: {
    marginLeft: spacerWidth,
  },
  body: {
    paddingLeft: avatarSize + 2 * borderWidth + spacerWidth,
  },
  commentThreadSection: {
    width: constants.drawerWidth - 2 * constants.commentPanelPadding,
    padding: 10,
  },
  commentEntryAction: {
    fontSize: 'inherit',
    color: '#0000ff',
    width: 46,
    minWidth: 46,
    height: 20,
    minHeight: 20,
    padding: 0,
    textAlign: 'center',
    textTransform: 'inherit',
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
};

class ThreadSection extends PureComponent {
  makeAvatar = (authorStruct) => {
    const nameSegs = authorStruct.name.trim().split(/ +/);
    return nameSegs.reduce((acc, i) => (acc + i[0]), '');
  };

  render = () => {
    const { data, classes } = this.props;

    const threadData = data;

    const feedbackList = [];
    for (let i = 0; i < threadData.feedbackList.length; i++) {
      feedbackList.push(
        <li key={i}>
          <div className="comment-entry">
            <div className="comment-entry-header">
              <span className={`comment-entry-avatar ${classes.avatar}`}>{this.makeAvatar(threadData.feedbackList[i].author)}</span>
              <span className={`comment-entry-author ${classes.author}`}>{threadData.feedbackList[i].author.name}</span>
              <span className="comment-entry-datetime">
                <time dateTime={threadData.feedbackList[i].createdAt}>{moment(threadData.feedbackList[i].createdAt, moment.ISO_8601).fromNow()}</time>
              </span>
            </div>
            <div className={`comment-entry-body ${classes.body}`}>
              <p>{threadData.feedbackList[i].content}</p>
            </div>
            <div className="comment-entry-footer">
            </div>
          </div>
        </li>
      );
    }

    return (
    <div className={`comment-thread-section ${classes.commentThreadSection}`}>
      <ul>
        {feedbackList}
      </ul>
    </div>);
  };
}

export default withStyles(styles)(ThreadSection);

