import React from 'react';
import './index.css';


const Post = ({post}) => {
  console.log(post);
  if (!post) {
    return (
      <>
      </>
    )
  }

  const dat = new Date(post.created_at).toLocaleDateString();

  return (
    <>
      <div className="cntr checkOutWrapPost">
            <div>
                <div className="photoContainer">
                  <img src={post.image} alt="img" />
                </div>
            </div>
            <div className="infoWrapPost">
                <h2 className="infoWrapTitle">
                  {post.title}
                </h2>
                <div>
                    <span className="infoWrapParam">АВТОР:</span>
                    <span className="infoWrapValue">{post.author.name}</span>
                </div>
                <div>
                    <span className="infoWrapParam">ДАТА:</span>
                    <span className="infoWrapValue">{dat}</span>
                </div>
                <div>
                    <span className="infoWrapParam">ОПИСАНИЕ:</span>
                    <span className="infoWrapValue">{post.text}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Post;