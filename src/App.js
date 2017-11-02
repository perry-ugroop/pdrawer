import React, { PureComponent } from 'react';
import './App.css';
import UGDrawer from './components/UGDrawer';
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

  handleClickClose = () => {
    this.setState({ drawerOpen: false });
  };

  componentDidMount = () => {
    this.setState({ data: utils.getData() });
  };

  render = () => (
      <div className="App">
        <div className="main">
          <article>
            <PostEntry
              onRequestOpen={this.handleRequestOpen}
            />
          </article>
        </div>
        <div className="otherContent">
          <section>
            <h1>Other Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur odio quis nibh ornare eleifend.
              Aenean posuere accumsan felis ut mollis. Cras a ipsum sit amet massa vehicula gravida ut a nibh. Sed quis eros
              ac risus finibus euismod ut et metus. Nulla pretium leo orci, nec vestibulum urna semper vel. Vivamus pharetra
              luctus ligula, pharetra vehicula nisi facilisis in. Proin iaculis vehicula viverra. Ut a quam et nibh sodales
              aliquam. Cras id luctus erat, et suscipit ante. Proin vestibulum sollicitudin justo nec dignissim. Curabitur at
              feugiat tortor.
            </p>
            <p>
              Mauris id eros sollicitudin, porta neque eu, fermentum metus. Ut vel porttitor est, at venenatis nulla. Nam
              iaculis ante in leo efficitur, sed laoreet nulla egestas. Nunc ut aliquam magna. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris euismod sit amet lacus interdum placerat. Praesent pellentesque faucibus metus.
              Fusce condimentum neque et ipsum bibendum, et feugiat justo vestibulum. Phasellus lobortis porta elementum.
            </p>
            <p>
              In tempor est ac erat venenatis, et blandit diam rhoncus. Suspendisse non erat eget enim pretium luctus posuere non
              nisi. Nam nisl lacus, facilisis eget porttitor quis, malesuada a ipsum. Fusce aliquam vulputate augue eu aliquam. Morbi
              aliquet dolor at elit tincidunt, eu malesuada metus feugiat. Nullam ullamcorper turpis sit amet enim cursus, id interdum tortor dapibus. Aenean egestas risus et lectus euismod fringilla non hendrerit magna. Phasellus ac pellentesque velit, sit amet interdum quam. Morbi viverra, est vel iaculis ultricies, augue ligula bibendum odio, quis vestibulum leo nisi sit amet augue. Nunc non bibendum arcu, vel lobortis nulla. Fusce vel lectus non augue posuere bibendum.
            </p>
          </section>
        </div>
        <aside>
          <UGDrawer drawerClass="material-ui" open={this.state.drawerOpen} onChange={this.handleOnDrawerChange} onRequestClose={this.handleRequestClose}>
            <CommentPanel data={this.state.data} drawerWidth={constants.drawerWidth} onClickClose={this.handleClickClose} />
          </UGDrawer>
        </aside>
      </div>
    );
}

export default App;

