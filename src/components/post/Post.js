import React from 'react';

import './Post.css'

import Comment from '../comment/Comment';

function Post({ post }) {
  return (
    <div className="post">

      <div className="post-profile">
        <div className="post-img-profile">
          <img src={`http://localhost:8080/assets/img/${post.author.avatar}`} alt="Profile"/>
        </div>
        <div className="post-profile-info">
          <p className="post-profile-name">{post.author.name}</p>
          <p className="post-date">{post.date}</p>
        </div>
      </div>

      <div className="post-message">
        {post.content}
      </div>

      <hr/>

      <div className="post-comments">
        {post.comments.map(c => <Comment key={c.id} comment={c} />)}
      </div>
    </div>
  );
}

Post.defaultProps = {
  post: {
    id: 1,
    author: {
      avatar: 'edu_profile.png',
      name: 'Edu'
    },
    date: '12 Mar 2020',
    content: 'E se construíssemos uma casinha na arvore?',
    comments: [
      {
        id: 1,
        author: {
          name: 'Dudu',
          avatar: 'dudu_profile.png'
        },
        content: 'Bora!'
      }
    ]
  }
}

export default Post;
