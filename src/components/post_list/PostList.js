import React, { Component } from 'react';

import './PostList.css'

import posts from '../../assets/data/posts.json';

import Post from '../post/Post'

class PostList extends Component {
  state = {
    posts: posts
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(p => <Post key={p.id} post={p} />)}
      </div>
    );
  }
}

export default PostList;
