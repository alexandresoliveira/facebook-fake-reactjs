import React from 'react';

import './Comment.css';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-img">
        <img src={`http://localhost:8080/assets/img/${comment.author.avatar}`} alt=""/>
      </div>
      <div className="comment-message">
        <p>
        <strong>{comment.author.name}</strong> 
        {comment.content}
        </p>
      </div>
    </div>
  );
}

Comment.defaultProps = {
  comment: {
    id: 1,
    author: {
      name: 'Dudu',
      avatar: 'dudu_profile.png'
    },
    content: 'Bora!'
  }
}

export default Comment;
