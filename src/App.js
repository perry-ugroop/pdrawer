import React, { PureComponent } from 'react';
import './App.css';
import Drawer from 'react-motion-drawer';
import PostEntry from './components/PostEntry'
import CommentPanel from './components/CommentPanel'
import utils from './utils';
import constants from './constants';

class App extends PureComponent {
  state = {
    drawerOpen: false,
    data: null,
  };

  handleRequestOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleOnDrawerChange = (openState) => {
    this.setState({ drawerOpen: openState });
  };

  handleRequestClose = () => {
    this.setState({ drawerOpen: false });
  };

  componentDidMount = () => {
    this.setState({ data: utils.getData() });
  };

  render = () => (
      <div className="App">
        <article>
          <PostEntry
            onRequestOpen={this.handleRequestOpen}
          />
        </article>
        <aside>
          <Drawer
            width={constants.drawerWidth}
            open={this.state.drawerOpen}
            right
            onChange={this.handleOnDrawerChange}
            drawerStyle={{ backgroundColor: '#fff' }}
          >
            <CommentPanel data={this.state.data} drawerWidth={constants.drawerWidth} />
          </Drawer>
        </aside>
      </div>
    );
}

export default App;

