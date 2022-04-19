import React from 'react';
import './index.css';

const Card = () => {
  return (
        <div className="recent-posts-card">
            <div className="recent-posts-card-data">
                <span className="card-data-head">12.04.2022</span>
                <span className="card-data-foot">Автор поста</span>
            </div>
            <div className="recent-posts-photo"></div>
            <h4 className="recent-posts-card-title">Название поста</h4>
            <p className="recent-posts-card-txt">Краткое описание</p>
            <a className="recent-posts-card-a" href="#">Читать пост</a>
        </div>
  )
}

export default Card;