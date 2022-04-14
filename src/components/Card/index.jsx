import React from 'react';
import './index.css';

const Card = () => {
  return (
        <div className="recent-posts-card">
            <div className="recent-posts-card-data">
                <span className="card-data-head">30</span>
                <span className="card-data-foot">Sep.</span>
            </div>
            <div className="recent-posts-photo"></div>
            <h4 className="recent-posts-card-title">Lorem ipsum dolor sit amet</h4>
            <p className="recent-posts-card-txt">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</p>
            <a className="recent-posts-card-a" href="#">Read More</a>
        </div>
  )
}

export default Card;