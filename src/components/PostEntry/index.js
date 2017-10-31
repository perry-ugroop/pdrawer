import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import './styles.css'

class PostEntry extends Component {
  render = () => {
    const { onRequestOpen } = this.props;

    return (
      <div className="post-entry">
        <article>
          <div className="post-row post-title">
            <header>
              <h1>This Is A Sample Post</h1>
            </header>
          </div>
          <Divider light />
          <div className="post-row post-body">
            <p>This is my post.</p>
            <p>Sample only.</p>
            <p>Thanks for reading.</p>
          </div>
          <Divider light />
          <div className="post-row post-footer">
            <aside>
              <ul>
                <li>Posted by <a href="mailto:perry.valdez@ugroop.com.au">Perry</a> on <time dateTime="2017-10-27T07:52:17Z">27 October 2017</time></li>
                <li><Button raised onClick={onRequestOpen}>Comments</Button></li>
              </ul>
            </aside>
          </div>
        </article>
      </div>
    );
  };
}

export default PostEntry;

