import React from 'react';
import './index.css';


const Post = ({post}) => {

  if (!post) {
    return (
      <>
      </>
    )
  }

  return (
    <>
      {post.title}
    </>
  )
}

export default Post;