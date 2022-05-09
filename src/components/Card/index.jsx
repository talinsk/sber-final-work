import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

const Card = ({post}) => {
  const bgImageStyle = {
    backgroundImage: `url(${post.image})`
  };

  const dat = new Date(post.created_at).toLocaleDateString();

  return (
        <div className="recent-posts-card">
            <div className="recent-posts-card-data">
                <span className="card-data-head">{dat}</span>
                <span className="card-data-foot">{post.author.name}</span>
            </div>
            <div className="recent-posts-photo" style={bgImageStyle}></div>
            <h4 className="recent-posts-card-title">{post.title}</h4>
            {/*<p className="recent-posts-card-txt">Краткое описание</p>*/}            
            {/*<a className="recent-posts-card-a" href="#">Читать пост</a>*/}
            <Link to={"/post/" + post._id} key={post._id} className="recent-posts-card-a">
              Читать пост
            </Link>
        </div>
  )
}

export default Card;